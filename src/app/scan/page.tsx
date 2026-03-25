"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScanHero from "@/components/scan/ScanHero";
import WhyAccessibility from "@/components/scan/WhyAccessibility";
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

  return `${hours}:${minutes.toString().padStart(2, "0")} hour${hours === 1 ? "" : "s"}`;
}

function buildDailyLimitMessage(rateLimit?: RateLimitInfo) {
  if (!rateLimit?.resetTime) {
    return "The daily limit of 5 free scans has been reached. Please try again tomorrow.";
  }

  const remaining = formatTimeUntil(rateLimit.resetTime);
  return `The daily limit of ${rateLimit.limit} free scans has been reached.`;
}

export default function ScanPage() {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [currentUrl, setCurrentUrl] = useState("");
  const [results, setResults] = useState<ScanResultsData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleScan = async (url: string) => {
    setCurrentUrl(url);
    setScanState("scanning");
    setErrorMessage(undefined);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = (await response.json()) as ScanResultsData | ScanErrorResponse;

      if (!response.ok) {
        if (response.status === 429) {
          const message = buildDailyLimitMessage(
            "rateLimit" in data ? data.rateLimit : undefined
          );
          throw new Error(message);
        }

        throw new Error(
          ("error" in data && data.error) || "Scan failed. Please try again."
        );
      }

      setResults(data as ScanResultsData);
      setScanState("complete");
    } catch (err) {
      const raw = err instanceof Error ? err.message : "";

      const message =
        raw &&
        /daily limit|free scans|minute|hour|timeout|not be reached|not be found|blocking|different URL|could not be scanned/i.test(
          raw
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
      <WhyAccessibility />
      <CaseForAccessibility />
      <Footer />
    </div>
  );
}