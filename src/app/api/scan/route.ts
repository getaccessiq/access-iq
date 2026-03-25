import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

export const runtime = "nodejs";
export const maxDuration = 60;

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

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Scan API is running. Use POST /api/scan with { url }.",
  });
}

export async function POST(request: NextRequest) {
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

  let browser: Awaited<ReturnType<typeof import("puppeteer-core")["default"]["launch"]>> | null = null;

  try {
    const axeSource = readFileSync(
      path.join(process.cwd(), "node_modules/axe-core/axe.min.js"),
      "utf-8"
    );

    const chromiumModule = await import("@sparticuz/chromium");
    const puppeteerModule = await import("puppeteer-core");

    const chromium = chromiumModule.default ?? chromiumModule;
    const puppeteer = puppeteerModule.default ?? puppeteerModule;

    const isDev = process.env.NODE_ENV !== "production";

    let executablePath: string | undefined;

    if (process.env.PUPPETEER_EXECUTABLE_PATH) {
      executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
    } else if (!isDev && process.env.CHROMIUM_REMOTE_EXEC_PATH) {
      executablePath = await chromium.executablePath(
        process.env.CHROMIUM_REMOTE_EXEC_PATH
      );
    } else if (!isDev) {
      executablePath = await chromium.executablePath();
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
      return (window as Window & { axe?: { run: () => Promise<AxeResults> } }).axe!.run();
    });

    const counts = countByImpact(results.violations ?? []);

    return NextResponse.json({
      success: true,
      url: validUrl,
      scannedAt: new Date().toISOString(),
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

    if (/Could not find Chrome|Browser was not found|executablePath/i.test(raw)) {
      friendly =
        "The scan browser could not be started locally. Please set PUPPETEER_EXECUTABLE_PATH or install Chrome/Chromium.";
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
    } else if (/toLowerCase|Cannot read prop|Cannot read properties|undefined/i.test(raw)) {
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
