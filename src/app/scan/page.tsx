"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScanHero from "@/components/scan/ScanHero";
import AccessibilityWhy from "@/components/scan/WhyAccessibility";
import CaseForAccessibility from "@/components/scan/CaseForAccessibility";
import ScanLoadingView from "@/components/scan/ScanLoadingView";
import ScanResults from "@/components/scan/ScanResults";

type ScanState = "idle" | "scanning" | "complete" | "error";

interface Violation {
  id: string;
  description: string;
  help: string;
  helpUrl: string;
  impact: "critical" | "serious" | "moderate" | "minor" | null;
  nodes: Array<{ html: string; target: string[] }>;
}

interface ImpactCounts {
  critical: number;
  serious: number;
  moderate: number;
  minor: number;
  total: number;
}

interface ScanResultsData {
  url: string;
  scannedAt: string;
  counts: ImpactCounts;
  violations: Violation[];
  passes: number;
  incomplete: number;
}

interface RateLimitInfo {
  limit: number;
  remaining: number;
  used?: number;
  resetTime: string;
}

interface ScanErrorResponse {
  success?: false;
  code?: string;
  error?: string;
  rateLimit?: RateLimitInfo;
}

const MIN_SCAN_DURATION_MS = 8000;

function formatTimeUntil(resetTime: string) {
  const reset = new Date(resetTime).getTime();
  const now = Date.now();
  const diffMs = Math.max(reset - now, 0);

  const totalMinutes = Math.ceil(diffMs / 1000 / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours <= 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  return `${hours}:${minutes.toString().padStart(2, "0")} hour${
    hours === 1 ? "" : "s"
  }`;
}

function buildDailyLimitMessage(rateLimit?: RateLimitInfo) {
  if (!rateLimit?.resetTime) {
    return "Daily free scan limit reached. Try again later or upgrade.";
  }

  const remaining = formatTimeUntil(rateLimit.resetTime);
  return `Daily free scan limit reached. Try again in ${remaining} or upgrade.`;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function ScanPage() {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [currentUrl, setCurrentUrl] = useState("");
  const [results, setResults] = useState<ScanResultsData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleScan = async (url: string) => {
    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      setCurrentUrl("");
      setResults(null);
      setErrorMessage("Please enter a website URL.");
      setScanState("error");
      return;
    }

    setCurrentUrl(trimmedUrl);
    setResults(null);
    setErrorMessage(undefined);
    setScanState("scanning");

    const startedAt = Date.now();

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmedUrl }),
      });

      const data = (await response.json()) as
        | ScanResultsData
        | ScanErrorResponse;

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            buildDailyLimitMessage(
              "rateLimit" in data ? data.rateLimit : undefined
            )
          );
        }

        throw new Error(
          ("error" in data && data.error) ||
            "Scan failed. Please try again."
        );
      }

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(MIN_SCAN_DURATION_MS - elapsed, 0);

      if (remaining > 0) {
        await sleep(remaining);
      }

      setResults(data as ScanResultsData);
      setScanState("complete");
    } catch (err) {
      const raw = err instanceof Error ? err.message : "";

      const message =
        raw &&
        /daily limit|free scan|minute|hour|upgrade|timeout|not reachable|not be reached|not be found|blocking|different url|could not be scanned|valid website url|website url|ssl|certificate/i.test(
          raw.toLowerCase()
        )
          ? raw
          : "This website could not be scanned. Please try again or enter a different URL.";

      setErrorMessage(message);
      setScanState("error");
    }
  };

  const handleRescan = () => {
    setScanState("idle");
    setResults(null);
    setErrorMessage(undefined);
    setCurrentUrl("");
  };

  if (scanState === "scanning") {
    return (
      <div className="min-h-screen">
        <Header />
        <ScanLoadingView url={currentUrl} />
        <Footer />
      </div>
    );
  }

  if (scanState === "complete" && results) {
    return (
      <div className="min-h-screen">
        <Header />
        <ScanResults results={results} onRescan={handleRescan} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <ScanHero onScan={handleScan} error={errorMessage} />
      <AccessibilityWhy />
      <CaseForAccessibility />
      <Footer />
    </div>
  );
}