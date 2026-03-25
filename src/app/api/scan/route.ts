import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

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
  let critical = 0, serious = 0, moderate = 0, minor = 0;
  for (const v of violations) {
    const nodeCount = v.nodes.length;
    switch (v.impact) {
      case "critical": critical += nodeCount; break;
      case "serious":  serious  += nodeCount; break;
      case "moderate": moderate += nodeCount; break;
      case "minor":    minor    += nodeCount; break;
    }
  }
  return { critical, serious, moderate, minor, total: critical + serious + moderate + minor };
}

export async function POST(request: NextRequest) {
  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { url } = body;
  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  // Validate URL
  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return NextResponse.json({ error: "URL must use http or https" }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
  }

  let browser;
  try {
    // Read axe-core source
    const axeSource = readFileSync(
      path.join(process.cwd(), "node_modules/axe-core/axe.min.js"),
      "utf-8"
    );

    // Dynamic import to avoid issues during build
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

    // Set a reasonable timeout and user agent
    page.setDefaultNavigationTimeout(30000);
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

    // Inject axe-core by evaluating the source directly in the page context
    await page.evaluate(axeSource);

    const results: AxeResults = await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (window as any).axe.run();
    });

    const counts = countByImpact(results.violations);

    return NextResponse.json({
      url,
      scannedAt: new Date().toISOString(),
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
      passes: results.passes.length,
      incomplete: results.incomplete.length,
    });
  } catch (err) {
    console.error("Scan error:", err);
    const raw = err instanceof Error ? err.message : String(err);

    let friendly: string;
    if (/TimeoutError|timeout|net::ERR_/i.test(raw)) {
      friendly = "This website could not be reached. Please check the URL and try again.";
    } else if (/Navigation|net::ERR_NAME_NOT_RESOLVED|ERR_CONNECTION/i.test(raw)) {
      friendly = "This website could not be found. Please check the URL and try again.";
    } else if (/toLowerCase|Cannot read prop|undefined/i.test(raw)) {
      friendly = "This website could not be scanned. It may be blocking automated access. Please try a different URL.";
    } else {
      friendly = "This website could not be scanned. Please try again or enter a different URL.";
    }

    return NextResponse.json({ error: friendly }, { status: 500 });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
