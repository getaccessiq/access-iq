"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScanHero from "@/components/NeustartUSA/ScanHero";
import AccessibilityWhy from "@/components/NeustartUSA/WhyAccessibility";
import CaseForAccessibility from "@/components/NeustartUSA/CaseForAccessibility";
import ScanLoadingView from "@/components/NeustartUSA/ScanLoadingView";
import ScanResults from "@/components/NeustartUSA/ScanResults";

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

interface ScanErrorResponse {
  success?: false;
  code?: string;
  error?: string;
}

const MIN_SCAN_DURATION_MS = 8000;

export default function ScanPage() {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [currentUrl, setCurrentUrl] = useState("");
  const [results, setResults] = useState<ScanResultsData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleScan = async (url: string) => {
    setCurrentUrl(url);
    setResults(null);
    setErrorMessage(undefined);

    try {
      const startedAt = Date.now();
      setScanState("scanning");

      const response = await fetch("/api/scan-unlimited", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, mode: "scan" }),
      });

      const data = (await response.json()) as
        | ScanResultsData
        | ScanErrorResponse;

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(MIN_SCAN_DURATION_MS - elapsed, 0);

      if (remaining > 0) {
        await new Promise((resolve) => setTimeout(resolve, remaining));
      }

      if (!response.ok) {
        throw new Error(
          ("error" in data && data.error) || "Scan failed. Please try again."
        );
      }

      setResults(data as ScanResultsData);
      setScanState("complete");
    } catch (err) {
      const raw = err instanceof Error ? err.message : "";

      const message =
        raw && raw.trim().length > 0
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