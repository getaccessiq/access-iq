import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import type { Browser } from "puppeteer-core";
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

const SOFT_404_PATTERN =
  /(^|\b)(404|not found|page not found|seite nicht gefunden|fehler|error|nicht verfügbar|no longer available|content not found|page unavailable)(\b|$)/i;

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

function getFriendlyErrorMessage(raw: string) {
  if (/PAGE_HTTP_404/i.test(raw)) {
    return "This website could not be found. Please check the URL and try again.";
  }

  if (/PAGE_HTTP_403/i.test(raw)) {
    return "This website is blocking access right now. Please try again or enter a different URL.";
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

  if (/Could not find Chrome|Browser was not found|executablePath/i.test(raw)) {
    return "The scan browser could not be started. Please check the browser configuration.";
  }

  if (/TimeoutError|timeout|net::ERR_TIMED_OUT/i.test(raw)) {
    return "This website could not be reached in time. Please check the URL and try again.";
  }

  if (
    /Navigation|ERR_NAME_NOT_RESOLVED|ERR_CONNECTION|ERR_CONNECTION_REFUSED|ERR_CONNECTION_CLOSED/i.test(
      raw
    )
  ) {
    return "This website could not be found. Please check the URL and try again.";
  }

  if (/ERR_CERT|SSL|TLS/i.test(raw)) {
    return "This website could not be scanned because of an SSL or certificate issue.";
  }

  if (/AXE_NOT_LOADED/i.test(raw)) {
    return "The accessibility engine could not be loaded for this page. Please try again.";
  }

  if (
    /toLowerCase|Cannot read prop|Cannot read properties|undefined/i.test(raw)
  ) {
    return "This website could not be scanned. It may be blocking automated access. Please try a different URL.";
  }

  return "This website could not be scanned. Please try again or enter a different URL.";
}

async function checkWebsiteReachable(url: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    let response: Response;

    try {
      response = await fetch(url, {
        method: "HEAD",
        redirect: "follow",
        signal: controller.signal,
        headers: {
          "user-agent": USER_AGENT,
        },
      });
    } catch {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: {
          "user-agent": USER_AGENT,
        },
      });
    }

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function createBrowser() {
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
    args: isDev ? [] : chromium.args,
    defaultViewport: { width: 1280, height: 800 },
    executablePath,
    headless: true,
  });
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
      return NextResponse.json(
        { success: false, error: "URL must use http or https." },
        { status: 400 }
      );
    }

    validUrl = parsed.toString();
  } catch {
    return NextResponse.json(
      { success: false, error: "Please enter a valid website URL." },
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

  try {
    const reachability = await checkWebsiteReachable(validUrl);

    if (!reachability.ok) {
      let friendly =
        "This website is not reachable right now. Please check the URL and try again.";

      if (reachability.status === 404) {
        friendly =
          "This website could not be found. Please check the URL and try again.";
      } else if (reachability.status === 403) {
        friendly =
          "This website is blocking access right now. Please try again or enter a different URL.";
      } else if (reachability.status >= 500) {
        friendly =
          "This website is currently unavailable. Please try again later.";
      }

      return NextResponse.json(
        {
          success: false,
          error: friendly,
          debug: `Reachability check failed with status ${reachability.status} ${reachability.statusText}`,
        },
        { status: 400 }
      );
    }
  } catch (err) {
    const raw = err instanceof Error ? err.message : String(err);

    let friendly =
      "This website is not reachable right now. Please check the URL and try again.";

    if (/ENOTFOUND|ERR_NAME_NOT_RESOLVED/i.test(raw)) {
      friendly =
        "This website could not be found. Please check the URL and try again.";
    } else if (/ECONNREFUSED|ERR_CONNECTION_REFUSED/i.test(raw)) {
      friendly =
        "This website refused the connection. Please try again or enter a different URL.";
    } else if (/abort|timeout|timed out/i.test(raw)) {
      friendly =
        "This website could not be reached in time. Please check the URL and try again.";
    } else if (/ERR_CERT|SSL|TLS/i.test(raw)) {
      friendly =
        "This website could not be reached because of an SSL or certificate issue.";
    }

    return NextResponse.json(
      {
        success: false,
        error: friendly,
        debug: raw,
      },
      { status: 400 }
    );
  }

  let browser: Browser | null = null;

  try {
    browser = await createBrowser();

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(15000);
    page.setDefaultTimeout(15000);

    await page.setUserAgent(USER_AGENT);

    const navigationResponse = await page.goto(validUrl, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });

    const finalUrl = page.url();
    const status = navigationResponse?.status() ?? 0;

    if (!finalUrl || finalUrl === "about:blank") {
      throw new Error("INVALID_FINAL_URL");
    }

    if (status >= 400) {
      throw new Error(`PAGE_HTTP_${status}`);
    }

    const pageTitle = await page.title();
    const pageText = await page.evaluate(() => {
      return document.body?.innerText?.slice(0, 2000) ?? "";
    });

    if (SOFT_404_PATTERN.test(pageTitle) || SOFT_404_PATTERN.test(pageText)) {
      throw new Error("SOFT_404_PAGE");
    }

    await page.evaluate(AXE_SOURCE);

    const results: AxeResults = await page.evaluate(() => {
      const axeGlobal = (
        window as Window & {
          axe?: {
            run: () => Promise<AxeResults>;
          };
        }
      ).axe;

      if (!axeGlobal) {
        throw new Error("AXE_NOT_LOADED");
      }

      return axeGlobal.run();
    });

    const counts = countByImpact(results.violations ?? []);
    const rateLimitAfterScan = await consumeFreeScan(ip);

    return NextResponse.json({
      success: true,
      url: finalUrl,
      scannedAt: new Date().toISOString(),
      rateLimit: serializeRateLimit(rateLimitAfterScan),
      counts,
      violations: (results.violations ?? []).map((violation) => ({
        id: violation.id ?? "",
        description: violation.description ?? "",
        help: violation.help ?? "",
        helpUrl: violation.helpUrl ?? "",
        impact: violation.impact ?? "minor",
        count: violation.nodes?.length ?? 0,
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
      await browser.close();
    }
  }
}