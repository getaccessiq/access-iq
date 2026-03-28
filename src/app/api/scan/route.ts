import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import type { Browser, HTTPResponse, Page } from "puppeteer-core";
import {
  consumeFreeScan,
  FREE_SCAN_DAILY_LIMIT,
  formatRemainingTime,
  getRateLimitStatus,
} from "@/lib/scan-rate-limit";

export const runtime = "nodejs";
export const maxDuration = 60;

const AXE_SOURCE = readFileSync(
  path.join(process.cwd(), "node_modules/axe-core/axe.min.js"),
  "utf-8"
);

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const DEFAULT_HEADERS = {
  "user-agent": USER_AGENT,
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "accept-language": "en-US,en;q=0.9,de;q=0.8",
};

const VIEWPORT = {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
};

const NAVIGATION_TIMEOUT = 30000;
const WAIT_FOR_READY_STATE_TIMEOUT = 10000;

const SOFT_404_PATTERN =
  /(^|\b)(404|not found|page not found|seite nicht gefunden|fehler|error|nicht verfügbar|no longer available|content not found|page unavailable)(\b|$)/i;

const BOT_PROTECTION_PATTERN =
  /(captcha|robot check|verify you are human|unusual traffic|automated access|bot detection|challenge)/i;

const NON_FATAL_REACHABILITY_STATUSES = new Set([401, 403, 405, 406, 409, 429]);
const NON_FATAL_NAVIGATION_STATUSES = new Set([401, 403, 405, 406, 409, 429]);

interface AxeViolation {
  id: string;
  description: string;
  impact: "critical" | "serious" | "moderate" | "minor" | null;
  help: string;
  helpUrl: string;
  nodes: Array<{ html: string; target: string[] }>;
}

interface AxeResults {
  violations: AxeViolation[];
  passes: Array<unknown>;
  incomplete: Array<unknown>;
}

interface RateLimitPayload {
  limit: number;
  remaining: number;
  used: number;
  resetTime: string;
}

interface ReachabilityResult {
  ok: boolean;
  status: number;
  statusText: string;
  finalUrl: string;
}

function countByImpact(violations: AxeViolation[]) {
  let critical = 0;
  let serious = 0;
  let moderate = 0;
  let minor = 0;

  for (const violation of violations) {
    const nodeCount = violation.nodes?.length ?? 0;

    switch (violation.impact) {
      case "critical":
        critical += nodeCount;
        break;
      case "serious":
        serious += nodeCount;
        break;
      case "moderate":
        moderate += nodeCount;
        break;
      case "minor":
        minor += nodeCount;
        break;
      default:
        break;
    }
  }

  return {
    critical,
    serious,
    moderate,
    minor,
    total: critical + serious + moderate + minor,
  };
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

function toSafeIsoString(resetTime: unknown) {
  const safeResetTime =
    typeof resetTime === "number" && Number.isFinite(resetTime)
      ? resetTime
      : Date.now() + 24 * 60 * 60 * 1000;

  return new Date(safeResetTime).toISOString();
}

function getRemainingMs(resetTime: unknown) {
  const safeResetTime =
    typeof resetTime === "number" && Number.isFinite(resetTime)
      ? resetTime
      : Date.now() + 24 * 60 * 60 * 1000;

  return Math.max(safeResetTime - Date.now(), 0);
}

function normalizeUrl(input: string) {
  const trimmed = input.trim();

  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function serializeRateLimit(rateLimit: {
  limit: number;
  remaining: number;
  used: number;
  resetTime: unknown;
}): RateLimitPayload {
  return {
    limit: rateLimit.limit,
    remaining: rateLimit.remaining,
    used: rateLimit.used,
    resetTime: toSafeIsoString(rateLimit.resetTime),
  };
}

function shouldRetryNavigation(raw: string) {
  return /TimeoutError|Navigation timeout|ERR_TIMED_OUT|frame detached|net::ERR_ABORTED/i.test(
    raw
  );
}

function getFriendlyErrorMessage(raw: string) {
  if (/INVALID_URL/i.test(raw)) {
    return "Please enter a valid website URL.";
  }

  if (/UNSUPPORTED_PROTOCOL/i.test(raw)) {
    return "URL must use http or https.";
  }

  if (/PAGE_HTTP_404/i.test(raw)) {
    return "This website could not be found. Please check the URL and try again.";
  }

  if (/PAGE_HTTP_403/i.test(raw)) {
    return "This website is blocking automated access right now. Please try again or enter a different URL.";
  }

  if (/PAGE_HTTP_5\d{2}/i.test(raw)) {
    return "This website is currently unavailable. Please try again later.";
  }

  if (/SOFT_404_PAGE/i.test(raw)) {
    return "This page appears to be unavailable or not found. Please check the URL and try again.";
  }

  if (/INVALID_FINAL_URL/i.test(raw)) {
    return "This website could not be opened correctly. Please check the URL and try again.";
  }

  if (/EMPTY_PAGE_CONTENT/i.test(raw)) {
    return "This website loaded without usable page content and could not be scanned.";
  }

  if (/AXE_NOT_LOADED/i.test(raw)) {
    return "The accessibility engine could not be loaded for this page. Please try again.";
  }

  if (
    /Could not find Chrome|Browser was not found|executablePath|CHROMIUM_REMOTE_EXEC_PATH/i.test(
      raw
    )
  ) {
    return "The scan browser could not be started. Please check the browser configuration.";
  }

  if (/TimeoutError|timeout|net::ERR_TIMED_OUT/i.test(raw)) {
    return "This website could not be reached in time. Please check the URL and try again.";
  }

  if (
    /Navigation|ERR_NAME_NOT_RESOLVED|ENOTFOUND|ERR_CONNECTION|ERR_CONNECTION_REFUSED|ERR_CONNECTION_CLOSED/i.test(
      raw
    )
  ) {
    return "This website could not be found. Please check the URL and try again.";
  }

  if (/ERR_CERT|SSL|TLS/i.test(raw)) {
    return "This website could not be scanned because of an SSL or certificate issue.";
  }

  return "This website could not be scanned. Please try again or enter a different URL.";
}

async function checkWebsiteReachable(url: string): Promise<ReachabilityResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    let response: Response;

    try {
      response = await fetch(url, {
        method: "HEAD",
        redirect: "follow",
        signal: controller.signal,
        headers: DEFAULT_HEADERS,
      });
    } catch {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: DEFAULT_HEADERS,
      });
    }

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      finalUrl: response.url,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function createBrowser(): Promise<Browser> {
  const chromium = (await import("@sparticuz/chromium")).default;
  const puppeteer = (await import("puppeteer-core")).default;

  const isDev = process.env.NODE_ENV !== "production";

  let executablePath: string | undefined;

  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  } else if (!isDev) {
    if (!process.env.CHROMIUM_REMOTE_EXEC_PATH) {
      throw new Error("CHROMIUM_REMOTE_EXEC_PATH is not set");
    }

    executablePath = await chromium.executablePath(
      process.env.CHROMIUM_REMOTE_EXEC_PATH
    );
  }

  return puppeteer.launch({
    args: isDev
      ? [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--disable-gpu",
          "--no-first-run",
          "--no-zygote",
          "--disable-blink-features=AutomationControlled",
        ]
      : [
          ...chromium.args,
          "--disable-blink-features=AutomationControlled",
        ],
    defaultViewport: VIEWPORT,
    executablePath,
    headless: true,
  });
}

async function preparePage(page: Page) {
  page.setDefaultNavigationTimeout(NAVIGATION_TIMEOUT);
  page.setDefaultTimeout(NAVIGATION_TIMEOUT);

  await page.setUserAgent(USER_AGENT);
  await page.setJavaScriptEnabled(true);
  await page.setViewport(VIEWPORT);

  await page.setExtraHTTPHeaders({
    "accept-language": "en-US,en;q=0.9,de;q=0.8",
    "upgrade-insecure-requests": "1",
  });

  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "webdriver", {
      get: () => false,
    });
  });
}

async function gotoWithFallback(
  page: Page,
  url: string
): Promise<HTTPResponse | null> {
  try {
    return await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: NAVIGATION_TIMEOUT,
    });
  } catch (error) {
    const raw = error instanceof Error ? error.message : String(error);

    if (!shouldRetryNavigation(raw)) {
      throw error;
    }

    return await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: NAVIGATION_TIMEOUT,
    });
  }
}

async function getPageSignals(page: Page) {
  await page
    .waitForFunction(
      () =>
        document.readyState === "complete" ||
        document.readyState === "interactive",
      { timeout: WAIT_FOR_READY_STATE_TIMEOUT }
    )
    .catch(() => null);

  const title = await page.title();

  const pageText = await page.evaluate(() => {
    return document.body?.innerText?.slice(0, 4000) ?? "";
  });

  const html = await page.content();

  const hasUsableBody = await page.evaluate(() => {
    const text = document.body?.innerText?.trim() ?? "";
    const childCount = document.body?.children?.length ?? 0;
    return text.length > 0 || childCount > 0;
  });

  return {
    title,
    pageText,
    html,
    hasUsableBody,
  };
}

async function runAxe(page: Page): Promise<AxeResults> {
  await page.evaluate(AXE_SOURCE);

  return page.evaluate(async () => {
    const axeGlobal = (
      window as Window & {
        axe?: {
          run: (
            context?: Element | Document,
            options?: Record<string, unknown>
          ) => Promise<AxeResults>;
        };
      }
    ).axe;

    if (!axeGlobal) {
      throw new Error("AXE_NOT_LOADED");
    }

    return axeGlobal.run(document, {
      resultTypes: ["violations", "incomplete", "passes"],
      iframes: false,
    });
  });
}

function buildWarningFromSignals(
  status: number,
  title: string,
  pageText: string,
  html: string
) {
  const combined = `${title}\n${pageText}\n${html}`.slice(0, 10000);

  if (BOT_PROTECTION_PATTERN.test(combined)) {
    return "This website appears to be showing a bot-protection or verification page. Scan results may reflect that page instead of the full public site.";
  }

  if (NON_FATAL_NAVIGATION_STATUSES.has(status)) {
    return "This website restricts automated access. A partial scan was attempted on the content that was available.";
  }

  return undefined;
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Scan API is running. Use POST /api/scan with { url }.",
    freeScanLimit: {
      limit: FREE_SCAN_DAILY_LIMIT,
      windowHours: 24,
    },
  });
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  let body: { url?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  const rawUrl = body.url?.trim();

  if (!rawUrl) {
    return NextResponse.json(
      { success: false, error: "Please enter a website URL." },
      { status: 400 }
    );
  }

  const normalizedUrl = normalizeUrl(rawUrl);

  let validUrl: string;

  try {
    const parsed = new URL(normalizedUrl);

    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("UNSUPPORTED_PROTOCOL");
    }

    validUrl = parsed.toString();
  } catch (error) {
    const raw = error instanceof Error ? error.message : "INVALID_URL";

    return NextResponse.json(
      {
        success: false,
        error: getFriendlyErrorMessage(raw),
        debug: raw,
      },
      { status: 400 }
    );
  }

  const rateLimit = await getRateLimitStatus(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        code: "DAILY_SCAN_LIMIT_REACHED",
        error: `Daily free scan limit reached. Try again in ${formatRemainingTime(
          getRemainingMs(rateLimit.resetTime)
        )} or upgrade.`,
        rateLimit: serializeRateLimit(rateLimit),
      },
      { status: 429 }
    );
  }

  let preflightWarning: string | undefined;

  try {
    const reachability = await checkWebsiteReachable(validUrl);

    if (!reachability.ok) {
      if (reachability.status === 404) {
        return NextResponse.json(
          {
            success: false,
            error:
              "This website could not be found. Please check the URL and try again.",
            debug: `Reachability check failed with status ${reachability.status} ${reachability.statusText}`,
          },
          { status: 400 }
        );
      }

      if (reachability.status >= 500) {
        return NextResponse.json(
          {
            success: false,
            error: "This website is currently unavailable. Please try again later.",
            debug: `Reachability check failed with status ${reachability.status} ${reachability.statusText}`,
          },
          { status: 400 }
        );
      }

      if (NON_FATAL_REACHABILITY_STATUSES.has(reachability.status)) {
        preflightWarning =
          "This website restricts automated access. The scan will continue with a best-effort browser render.";
      } else {
        return NextResponse.json(
          {
            success: false,
            error:
              "This website is not reachable right now. Please check the URL and try again.",
            debug: `Reachability check failed with status ${reachability.status} ${reachability.statusText}`,
          },
          { status: 400 }
        );
      }
    }
  } catch (err) {
    const raw = err instanceof Error ? err.message : String(err);

    if (/abort|timeout|timed out/i.test(raw)) {
      preflightWarning =
        "The initial reachability check timed out. Continuing with a direct browser scan.";
    } else if (
      /ECONNREFUSED|ERR_CONNECTION_REFUSED|ENOTFOUND|ERR_NAME_NOT_RESOLVED/i.test(
        raw
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This website could not be found. Please check the URL and try again.",
          debug: raw,
        },
        { status: 400 }
      );
    } else if (/ERR_CERT|SSL|TLS/i.test(raw)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This website could not be reached because of an SSL or certificate issue.",
          debug: raw,
        },
        { status: 400 }
      );
    } else {
      preflightWarning =
        "The initial reachability check could not be completed. Continuing with a direct browser scan.";
    }
  }

  let browser: Browser | null = null;

  try {
    browser = await createBrowser();

    const page = await browser.newPage();
    await preparePage(page);

    let navigationResponse: HTTPResponse | null = null;

    try {
      navigationResponse = await gotoWithFallback(page, validUrl);
    } catch (error) {
      const raw = error instanceof Error ? error.message : String(error);

      if (/ERR_NAME_NOT_RESOLVED|ENOTFOUND/i.test(raw)) {
        throw new Error("PAGE_HTTP_404");
      }

      if (/ERR_CERT|SSL|TLS/i.test(raw)) {
        throw error;
      }

      if (/timeout|ERR_TIMED_OUT/i.test(raw)) {
        throw error;
      }

      throw error;
    }

    const finalUrl = page.url();
    const status = navigationResponse?.status() ?? 0;

    if (!finalUrl || finalUrl === "about:blank") {
      throw new Error("INVALID_FINAL_URL");
    }

    const { title, pageText, html, hasUsableBody } = await getPageSignals(page);

    if (!hasUsableBody) {
      throw new Error("EMPTY_PAGE_CONTENT");
    }

    if (status === 404) {
      throw new Error("PAGE_HTTP_404");
    }

    if (status >= 500) {
      throw new Error(`PAGE_HTTP_${status}`);
    }

    if (
      status >= 400 &&
      !NON_FATAL_NAVIGATION_STATUSES.has(status) &&
      !hasUsableBody
    ) {
      throw new Error(`PAGE_HTTP_${status}`);
    }

    if (SOFT_404_PATTERN.test(title) || SOFT_404_PATTERN.test(pageText)) {
      throw new Error("SOFT_404_PAGE");
    }

    const results = await runAxe(page);
    const counts = countByImpact(results.violations ?? []);
    const rateLimitAfterScan = await consumeFreeScan(ip);

    const navigationWarning = buildWarningFromSignals(
      status,
      title,
      pageText,
      html
    );

    return NextResponse.json({
      success: true,
      url: finalUrl,
      scannedAt: new Date().toISOString(),
      rateLimit: serializeRateLimit(rateLimitAfterScan),
      counts,
      warning: navigationWarning || preflightWarning,
      metadata: {
        httpStatus: status || null,
        title: title || "",
        botProtected: BOT_PROTECTION_PATTERN.test(
          `${title}\n${pageText}\n${html}`
        ),
      },
      violations: (results.violations ?? []).map((violation) => ({
        id: violation.id ?? "",
        description: violation.description ?? "",
        help: violation.help ?? "",
        helpUrl: violation.helpUrl ?? "",
        impact: violation.impact ?? "minor",
        nodes: (violation.nodes ?? []).slice(0, 3).map((node) => ({
          html: node.html ?? "",
          target: node.target ?? [],
        })),
      })),
      passes: results.passes?.length ?? 0,
      incomplete: results.incomplete?.length ?? 0,
    });
  } catch (err) {
    console.error("Scan error:", err);

    const raw = err instanceof Error ? err.message : String(err);
    const friendly = getFriendlyErrorMessage(raw);

    return NextResponse.json(
      {
        success: false,
        error: friendly,
        debug: raw,
      },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close().catch(() => null);
    }
  }
}