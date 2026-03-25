"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScanHero from "@/components/scan/ScanHero";
import WhyAccessibility from "@/components/scan/WhyAccessibility";
import CaseForAccessibility from "@/components/scan/CaseForAccessibility";
import ScanningView from "@/components/scan/ScanningView";
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Scan failed. Please try again.");
      }

      setResults(data);
      setScanState("complete");
    } catch (err) {
      const raw = err instanceof Error ? err.message : "";
      const message =
        raw && /timeout|not be reached|not be found|blocking|different URL|could not be scanned/i.test(raw)
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
        <ScanningView url={currentUrl} />
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