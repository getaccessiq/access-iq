import { NextRequest, NextResponse } from "next/server";
import axe from "axe-core";
import type { Browser } from "puppeteer-core";

export const runtime = "nodejs";
export const maxDuration = 60;

// Einfaches In-Memory Rate Limit
// Hinweis: lokal okay, in echter Serverless-Production nur eingeschränkt zuverlässig
const requests = new Map<string, { count: number; resetTime: number }>();

interface AxeNodeResult {
  html: string;
  target: string[];
}

interface AxeViolation {
  id: string;
  description: string;
  impact: "critical" | "serious" | "moderate" | "minor" | null;
  help: string;
  helpUrl: string;
  nodes: AxeNodeResult[];
}

interface AxeResults {
  violations: AxeViolation[];
  passes: unknown[];
  incomplete: unknown[];
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
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  const maxRequests = 5;

  const current = requests.get(ip);

  if (!current || now > current.resetTime) {
    const resetTime = now + oneDay;

    requests.set(ip, {
      count: 1,
      resetTime,
    });

    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime,
    };
  }

  if (current.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: current.resetTime,
    };
  }

  current.count += 1;
  requests.set(ip, current);

  return {
    allowed: true,
    remaining: maxRequests - current.count,
    resetTime: current.resetTime,
  };
}

function validateUrl(rawUrl: string):
  | { valid: true; url: string }
  | { valid: false; error: string } {
  try {
    const parsed = new URL(rawUrl);

    if (!["http:", "https:"].includes(parsed.protocol)) {
      return {
        valid: false,
        error: "URL must use http or https",
      };
    }

    return {
      valid: true,
      url: parsed.toString(),
    };
  } catch {
    return {
      valid: false,
      error: "Invalid URL format",
    };
  }
}

async function launchBrowser() {
  const chromiumModule = await import("@sparticuz/chromium-min");
  const puppeteerModule = await import("puppeteer-core");

  const chromium = chromiumModule.default ?? chromiumModule;
  const puppeteer = puppeteerModule.default ?? puppeteerModule;

  const executablePath = process.env.CHROMIUM_REMOTE_EXEC_PATH
    ? await chromium.executablePath(process.env.CHROMIUM_REMOTE_EXEC_PATH)
    : process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/chromium-browser";

  return puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1280, height: 800 },
    executablePath,
    headless: true,
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Scan API is running. Use POST /api/scan with { url }.",
  });
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: "Tageslimit erreicht. Bitte morgen erneut versuchen.",
        rateLimit: {
          limit: 5,
          remaining: 0,
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
      {
        success: false,
        error: "Invalid request body",
      },
      { status: 400 }
    );
  }

  const rawUrl = body.url?.trim();

  if (!rawUrl) {
    return NextResponse.json(
      {
        success: false,
        error: "URL is required",
      },
      { status: 400 }
    );
  }

  const validation = validateUrl(rawUrl);

  if (!validation.valid) {
    return NextResponse.json(
      {
        success: false,
        error: validation.error,
      },
      { status: 400 }
    );
  }

  const validUrl = validation.url;

  let browser: Browser | null = null;

  try {
    browser = await launchBrowser();

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(30000);
    page.setDefaultTimeout(30000);

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    await page.goto(validUrl, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    await page.evaluate(axe.source);

    const results = await page.evaluate(async () => {
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
      message: "Scan completed successfully.",
      url: validUrl,
      ip,
      scannedAt: new Date().toISOString(),
      rateLimit: {
        limit: 5,
        remaining: rateLimit.remaining,
        resetTime: new Date(rateLimit.resetTime).toISOString(),
      },
      counts,
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

    let friendly =
      "This website could not be scanned. Please try again or enter a different URL.";

    if (/TimeoutError|timeout|net::ERR_TIMED_OUT/i.test(raw)) {
      friendly =
        "This website could not be reached in time. Please check the URL and try again.";
    } else if (
      /ERR_NAME_NOT_RESOLVED|ERR_CONNECTION|ERR_CONNECTION_REFUSED|ERR_CONNECTION_CLOSED/i.test(
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
    } else if (/Cannot read properties|undefined/i.test(raw)) {
      friendly =
        "This website could not be scanned. It may be blocking automated access. Please try a different URL.";
    }

    return NextResponse.json(
      {
        success: false,
        error: friendly,
        rateLimit: {
          limit: 5,
          remaining: rateLimit.remaining,
          resetTime: new Date(rateLimit.resetTime).toISOString(),
        },
      },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}