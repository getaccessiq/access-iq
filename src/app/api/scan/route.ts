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

const VIEWPORT = {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
};

const NAVIGATION_TIMEOUT = 30000;
const WAIT_FOR_READY_STATE_TIMEOUT = 10000;

const SOFT_404_PATTERN =
  /(^|\b)(404|not found|page not found|seite nicht gefunden|nicht verfügbar|no longer available|content not found|page unavailable)(\b|$)/i;

const BOT_PROTECTION_PATTERN =
  /(captcha|robot check|verify you are human|unusual traffic|automated access|bot detection|challenge)/i;

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

function normalizeUrl(input: string) {
  const trimmed = input.trim();

  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function shouldRetryNavigation(raw: string) {
  return /TimeoutError|Navigation timeout|ERR_TIMED_OUT|frame detached|net::ERR_ABORTED/i.test(
    raw
  );
}

function getFriendlyError(raw: string) {
  let friendly =
    "This website could not be scanned. Please try again or enter a different URL.";

  if (/INVALID_URL/i.test(raw)) {
    friendly = "Please enter a valid website URL.";
  } else if (/UNSUPPORTED_PROTOCOL/i.test(raw)) {
    friendly = "URL must use http or https.";
  } else if (/ERR_NAME_NOT_RESOLVED|ENOTFOUND/i.test(raw)) {
    friendly =
      "This website could not be found. Please check the URL and try again.";
  } else if (/ERR_CONNECTION_REFUSED|ECONNREFUSED/i.test(raw)) {
    friendly =
      "This website refused the connection. Please try again or enter a different URL.";
  } else if (/ERR_CERT|SSL|TLS/i.test(raw)) {
    friendly =
      "This website could not be scanned because of an SSL or certificate issue.";
  } else if (/TimeoutError|timeout|ERR_TIMED_OUT/i.test(raw)) {
    friendly = "This website could not be reached in time. Please try again.";
  } else if (/PAGE_HTTP_404/i.test(raw)) {
    friendly =
      "This website could not be found. Please check the URL and try again.";
  } else if (/PAGE_HTTP_403/i.test(raw)) {
    friendly =
      "This website is blocking automated access right now. Please try again or use an expert audit.";
  } else if (/PAGE_HTTP_5\d{2}/i.test(raw)) {
    friendly = "This website is currently unavailable. Please try again later.";
  } else if (/INVALID_FINAL_URL/i.test(raw)) {
    friendly =
      "This website could not be opened correctly. Please check the URL and try again.";
  } else if (/AXE_NOT_LOADED/i.test(raw)) {
    friendly =
      "The accessibility engine could not be loaded for this page. Please try again.";
  } else if (/DAILY_SCAN_LIMIT_REACHED/i.test(raw)) {
    friendly = raw;
  } else if (
    /Could not find Chrome|Browser was not found|executablePath|CHROMIUM_REMOTE_EXEC_PATH/i.test(
      raw
    )
  ) {
    friendly =
      "The scan browser could not be started. Please check the browser configuration.";
  }

  return friendly;
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

    Object.defineProperty(navigator, "languages", {
      get: () => ["en-US", "en", "de"],
    });

    Object.defineProperty(navigator, "platform", {
      get: () => "Win32",
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

async function launchBrowser(): Promise<Browser> {
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

function detectSoft404(title: string, text: string, status: number) {
  if (status === 404) {
    return true;
  }

  return SOFT_404_PATTERN.test(title) && SOFT_404_PATTERN.test(text);
}

function buildWarning(
  title: string,
  text: string,
  html: string,
  soft404Detected: boolean
) {
  const combined = `${title}\n${text}\n${html}`.slice(0, 10000);

  if (BOT_PROTECTION_PATTERN.test(combined)) {
    return "This website appears to be showing a bot-protection or verification page. Scan results may reflect that page instead of the full public site.";
  }

  if (soft404Detected) {
    return "This page contains signals similar to an unavailable or error page. The scan continued, but results may be incomplete.";
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
        error: getFriendlyError(raw),
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

  let browser: Browser | null = null;

  try {
    browser = await launchBrowser();

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

    const inputParsed = new URL(validUrl);
    const finalParsed = new URL(finalUrl);

    if (!["http:", "https:"].includes(finalParsed.protocol)) {
      throw new Error("INVALID_FINAL_URL");
    }

    if (status === 404) {
      throw new Error("PAGE_HTTP_404");
    }

    if (status >= 500) {
      throw new Error(`PAGE_HTTP_${status}`);
    }

    if (status === 403) {
      throw new Error("PAGE_HTTP_403");
    }

    await page
      .waitForFunction(
        () =>
          document.readyState === "complete" ||
          document.readyState === "interactive",
        { timeout: WAIT_FOR_READY_STATE_TIMEOUT }
      )
      .catch(() => null);

    const pageTitle = await page.title();
    const pageText = await page.evaluate(() => {
      return document.body?.innerText?.slice(0, 3000) ?? "";
    });
    const html = await page.content();

    const soft404Detected = detectSoft404(pageTitle, pageText, status);
    const warning = buildWarning(pageTitle, pageText, html, soft404Detected);

    const results = await runAxe(page);
    const counts = countByImpact(results.violations ?? []);
    const rateLimitAfterScan = await consumeFreeScan(ip);

    return NextResponse.json({
      success: true,
      inputUrl: validUrl,
      url: finalUrl,
      redirected: finalUrl !== validUrl,
      inputHostname: inputParsed.hostname,
      finalHostname: finalParsed.hostname,
      redirectedToDifferentHostname:
        inputParsed.hostname !== finalParsed.hostname,
      scannedAt: new Date().toISOString(),
      rateLimit: serializeRateLimit(rateLimitAfterScan),
      counts,
      warning,
      metadata: {
        httpStatus: status || null,
        title: pageTitle || "",
        soft404Detected,
        botProtected: BOT_PROTECTION_PATTERN.test(
          `${pageTitle}\n${pageText}\n${html}`
        ),
      },
      violations: (results.violations ?? []).map((v) => ({
        id: v.id ?? "",
        description: v.description ?? "",
        help: v.help ?? "",
        helpUrl: v.helpUrl ?? "",
        impact: v.impact ?? "minor",
        count: v.nodes?.length ?? 0,
        nodes: (v.nodes ?? []).slice(0, 3).map((node) => ({
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

    return NextResponse.json(
      {
        success: false,
        error: getFriendlyError(raw),
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