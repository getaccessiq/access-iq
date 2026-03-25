import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import type { Browser } from "puppeteer-core";

export const runtime = "nodejs";
export const maxDuration = 60;

// Free-scan Limit zentral anpassbar
const FREE_SCAN_DAILY_LIMIT = 5;
const FREE_SCAN_WINDOW_MS = 24 * 60 * 60 * 1000;

// Einfaches In-Memory Rate Limit
const requests = new Map<string, { count: number; resetTime: number }>();

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

function checkDailyFreeScanLimit(ip: string) {
  const now = Date.now();
  const current = requests.get(ip);

  if (!current || now > current.resetTime) {
    const resetTime = now + FREE_SCAN_WINDOW_MS;

    requests.set(ip, {
      count: 1,
      resetTime,
    });

    return {
      allowed: true,
      limit: FREE_SCAN_DAILY_LIMIT,
      remaining: FREE_SCAN_DAILY_LIMIT - 1,
      resetTime,
      used: 1,
    };
  }

  if (current.count >= FREE_SCAN_DAILY_LIMIT) {
    return {
      allowed: false,
      limit: FREE_SCAN_DAILY_LIMIT,
      remaining: 0,
      resetTime: current.resetTime,
      used: current.count,
    };
  }

  current.count += 1;
  requests.set(ip, current);

  return {
    allowed: true,
    limit: FREE_SCAN_DAILY_LIMIT,
    remaining: FREE_SCAN_DAILY_LIMIT - current.count,
    resetTime: current.resetTime,
    used: current.count,
  };
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
  const rateLimit = checkDailyFreeScanLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        code: "DAILY_SCAN_LIMIT_REACHED",
        error: `Daily limit reached. You have already used all ${FREE_SCAN_DAILY_LIMIT} free scans today. Please try again tomorrow.`,
        rateLimit: {
          limit: rateLimit.limit,
          remaining: rateLimit.remaining,
          used: rateLimit.used,
          resetTime: new Date(rateLimit.resetTime).toISOString(),
        },
      },
      { status: 429 }
    );
  }

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
      { success: false, error: "URL is required" },
      { status: 400 }
    );
  }

  let validUrl: string;

  try {
    const parsed = new URL(rawUrl);

    if (!["http:", "https:"].includes(parsed.protocol)) {
      return NextResponse.json(
        { success: false, error: "URL must use http or https" },
        { status: 400 }
      );
    }

    validUrl = parsed.toString();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid URL format" },
      { status: 400 }
    );
  }

  let browser: Browser | null = null;

  try {
    const axeSource = readFileSync(
      path.join(process.cwd(), "node_modules/axe-core/axe.min.js"),
      "utf-8"
    );

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

    browser = await puppeteer.launch({
      args: isDev ? [] : chromium.args,
      defaultViewport: { width: 1280, height: 800 },
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(15000);
    page.setDefaultTimeout(15000);

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    await page.goto(validUrl, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });

    await page.evaluate(axeSource);

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

    return NextResponse.json({
      success: true,
      url: validUrl,
      scannedAt: new Date().toISOString(),
      rateLimit: {
        limit: rateLimit.limit,
        remaining: rateLimit.remaining,
        used: rateLimit.used,
        resetTime: new Date(rateLimit.resetTime).toISOString(),
      },
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

    let friendly =
      "This website could not be scanned. Please try again or enter a different URL.";

    if (/DAILY_SCAN_LIMIT_REACHED/i.test(raw)) {
      friendly = `Daily limit reached. You have already used all ${FREE_SCAN_DAILY_LIMIT} free scans today. Please try again tomorrow.`;
    } else if (/Could not find Chrome|Browser was not found|executablePath/i.test(raw)) {
      friendly =
        "The scan browser could not be started. Please check the browser configuration.";
    } else if (/TimeoutError|timeout|net::ERR_TIMED_OUT/i.test(raw)) {
      friendly =
        "This website could not be reached in time. Please check the URL and try again.";
    } else if (
      /Navigation|ERR_NAME_NOT_RESOLVED|ERR_CONNECTION|ERR_CONNECTION_REFUSED|ERR_CONNECTION_CLOSED/i.test(
        raw
      )
    ) {
      friendly =
        "This website could not be found. Please check the URL and try again.";
    } else if (/ERR_CERT|SSL|TLS/i.test(raw)) {
      friendly =
        "This website could not be scanned because of an SSL or certificate issue.";
    } else if (/AXE_NOT_LOADED/i.test(raw)) {
      friendly =
        "The accessibility engine could not be loaded for this page. Please try again.";
    } else if (
      /toLowerCase|Cannot read prop|Cannot read properties|undefined/i.test(raw)
    ) {
      friendly =
        "This website could not be scanned. It may be blocking automated access. Please try a different URL.";
    }

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