import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

export const maxDuration = 60;

// Einfaches In-Memory Rate Limit
// Achtung: funktioniert nur begrenzt zuverlässig bei Serverless/mehreren Instanzen
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

  for (const v of violations) {
    const nodeCount = v.nodes.length;

    switch (v.impact) {
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
    requests.set(ip, {
      count: 1,
      resetTime: now + oneDay,
    });

    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime: now + oneDay,
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

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: "Tageslimit erreicht. Bitte morgen erneut versuchen.",
        limit: 5,
        remaining: 0,
        resetTime: new Date(rateLimit.resetTime).toISOString(),
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

  const { url } = body;

  if (!url) {
    return NextResponse.json(
      {
        success: false,
        error: "URL is required",
      },
      { status: 400 }
    );
  }

  try {
    const parsed = new URL(url);

    if (!["http:", "https:"].includes(parsed.protocol)) {
      return NextResponse.json(
        {
          success: false,
          error: "URL must use http or https",
        },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid URL format",
      },
      { status: 400 }
    );
  }

  let browser;

  try {
    const axeSource = readFileSync(
      path.join(process.cwd(), "node_modules/axe-core/axe.min.js"),
      "utf-8"
    );

    const chromium = (await import("@sparticuz/chromium-min")).default;
    const puppeteer = (await import("puppeteer-core")).default;

    const executablePath = process.env.CHROMIUM_REMOTE_EXEC_PATH
      ? await chromium.executablePath(process.env.CHROMIUM_REMOTE_EXEC_PATH)
      : process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/chromium-browser";

    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: { width: 1280, height: 800 },
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(30000);

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    await page.evaluate(axeSource);

    const results: AxeResults = await page.evaluate(() => {
      return (window as any).axe.run();
    });

    const counts = countByImpact(results.violations || []);

    return NextResponse.json({
      success: true,
      message: "Scan completed successfully.",
      url,
      ip,
      scannedAt: new Date().toISOString(),
      rateLimit: {
        limit: 5,
        remaining: rateLimit.remaining,
        resetTime: new Date(rateLimit.resetTime).toISOString(),
      },
      counts,
      violations: (results.violations || []).map((v) => ({
        id: v.id ?? "",
        description: v.description ?? "",
        help: v.help ?? "",
        helpUrl: v.helpUrl ?? "",
        impact: v.impact ?? "minor",
        nodes: (v.nodes ?? []).slice(0, 3).map((n) => ({
          html: n.html ?? "",
          target: n.target ?? [],
        })),
      })),
      passes: results.passes?.length ?? 0,
      incomplete: results.incomplete?.length ?? 0,
    });
  } catch (err) {
    console.error("Scan error:", err);

    const raw = err instanceof Error ? err.message : String(err);

    let friendly: string;

    if (/TimeoutError|timeout|net::ERR_/i.test(raw)) {
      friendly =
        "This website could not be reached. Please check the URL and try again.";
    } else if (/Navigation|net::ERR_NAME_NOT_RESOLVED|ERR_CONNECTION/i.test(raw)) {
      friendly =
        "This website could not be found. Please check the URL and try again.";
    } else if (/toLowerCase|Cannot read prop|undefined/i.test(raw)) {
      friendly =
        "This website could not be scanned. It may be blocking automated access. Please try a different URL.";
    } else {
      friendly =
        "This website could not be scanned. Please try again or enter a different URL.";
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