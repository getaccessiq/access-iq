import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import type { Browser, HTTPResponse, Page } from "puppeteer-core";

export const runtime = "nodejs";
export const maxDuration = 60;

const AXE_SOURCE = readFileSync(
  path.join(process.cwd(), "node_modules/axe-core/axe.min.js"),
  "utf-8"
);

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

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

function normalizeUrl(input: string) {
  const trimmed = input.trim();

  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
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
    friendly =
      "This website could not be reached in time. Please try again.";
  } else if (/PAGE_HTTP_404/i.test(raw)) {
    friendly =
      "This website could not be found. Please check the URL and try again.";
  } else if (/PAGE_HTTP_403/i.test(raw)) {
    friendly =
      "This website is blocking automated access right now. Please try again or use an expert audit.";
  } else if (/PAGE_HTTP_5\d{2}/i.test(raw)) {
    friendly =
      "This website is currently unavailable. Please try again later.";
  } else if (/SOFT_404_PAGE/i.test(raw)) {
    friendly =
      "This page appears to be unavailable or not found. Please check the URL and try again.";
  } else if (/INVALID_FINAL_URL/i.test(raw)) {
    friendly =
      "This website could not be opened correctly. Please check the URL and try again.";
  } else if (/AXE_NOT_LOADED/i.test(raw)) {
    friendly =
      "The accessibility engine could not be loaded for this page. Please try again.";
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
  page.setDefaultNavigationTimeout(30000);
  page.setDefaultTimeout(30000);

  await page.setUserAgent(USER_AGENT);

  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
  });

  await page.setExtraHTTPHeaders({
    "accept-language": "en-US,en;q=0.9,de;q=0.8",
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
      timeout: 30000,
    });
  } catch {
    return await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Scan API is running. Use POST /api/scan-unlimited with { url }.",
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

  let browser: Browser | null = null;

  try {
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
      args: isDev
        ? [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-blink-features=AutomationControlled",
          ]
        : [
            ...chromium.args,
            "--disable-blink-features=AutomationControlled",
          ],
      defaultViewport: { width: 1440, height: 900 },
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    await preparePage(page);

    const navigationResponse = await gotoWithFallback(page, validUrl);

    const finalUrl = page.url();
    const status = navigationResponse?.status() ?? 0;

    if (!finalUrl || finalUrl === "about:blank") {
      throw new Error("INVALID_FINAL_URL");
    }

    const finalParsed = new URL(finalUrl);
    if (!["http:", "https:"].includes(finalParsed.protocol)) {
      throw new Error("INVALID_FINAL_URL");
    }

    if (status >= 400) {
      throw new Error(`PAGE_HTTP_${status}`);
    }

    await page
      .waitForFunction(
        () =>
          document.readyState === "complete" ||
          document.readyState === "interactive",
        { timeout: 10000 }
      )
      .catch(() => null);

    const pageTitle = await page.title();
    const pageText = await page.evaluate(() => {
      return document.body?.innerText?.slice(0, 3000) ?? "";
    });

    const soft404Pattern =
      /404|not found|page not found|seite nicht gefunden|nicht verfügbar|no longer available/i;

    if (soft404Pattern.test(pageTitle) || soft404Pattern.test(pageText)) {
      throw new Error("SOFT_404_PAGE");
    }

    await page.evaluate(AXE_SOURCE);

    const results: AxeResults = await page.evaluate(async () => {
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
      });
    });

    const counts = countByImpact(results.violations ?? []);

    return NextResponse.json({
      success: true,
      inputUrl: validUrl,
      url: finalUrl,
      redirected: finalUrl !== validUrl,
      scannedAt: new Date().toISOString(),
      counts,
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
      await browser.close();
    }
  }
}