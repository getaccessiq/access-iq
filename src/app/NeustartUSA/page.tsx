"use client";

import { useCallback, useRef, useState } from "react";
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
  debug?: string;
}

const MIN_SUCCESS_LOADING_MS = 2500;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeUrl(input: string) {
  const trimmed = input.trim();

  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function isScanResultsData(data: unknown): data is ScanResultsData {
  if (!data || typeof data !== "object") return false;

  const value = data as Record<string, unknown>;

  return (
    typeof value.url === "string" &&
    typeof value.scannedAt === "string" &&
    typeof value.passes === "number" &&
    typeof value.incomplete === "number" &&
    typeof value.counts === "object" &&
    value.counts !== null &&
    Array.isArray(value.violations)
  );
}

function getFriendlyErrorMessage(rawMessage?: string) {
  const message = rawMessage?.trim();

  if (!message) {
    return "This website could not be scanned. Please try again or enter a different URL.";
  }

  if (/please enter a website url|valid website url|invalid url/i.test(message)) {
    return "Please enter a valid website URL.";
  }

  if (/not reachable|not be reached|not be found|dns|unavailable/i.test(message)) {
    return "This website could not be reached. Please check the URL and try again.";
  }

  if (/ssl|certificate/i.test(message)) {
    return "This website has an SSL or certificate issue and could not be scanned.";
  }

  if (/timeout/i.test(message)) {
    return "The scan took too long to complete. Please try again.";
  }

  if (/refused the connection|blocked|captcha|bot|challenge/i.test(message)) {
    return "This website appears to block automated scans.";
  }

  if (/invalid scan response/i.test(message)) {
    return "The scan returned an invalid response. Please try again.";
  }

  if (/could not be scanned|cannot be scanned/i.test(message)) {
    return message;
  }

  return "This website could not be scanned. Please try again or enter a different URL.";
}

export default function ScanPage() {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [currentUrl, setCurrentUrl] = useState("");
  const [results, setResults] = useState<ScanResultsData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const activeRequestRef = useRef(0);

  const handleScan = useCallback(async (url: string) => {
    const normalizedUrl = normalizeUrl(url);

    if (!normalizedUrl) {
      setCurrentUrl("");
      setResults(null);
      setErrorMessage("Please enter a website URL.");
      setScanState("error");
      return;
    }

    const requestId = Date.now();
    activeRequestRef.current = requestId;

    setCurrentUrl(normalizedUrl);
    setResults(null);
    setErrorMessage(undefined);
    setScanState("scanning");

    const startedAt = Date.now();

    try {
      const response = await fetch("/api/scan-unlimited", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: normalizedUrl }),
      });

      const data = (await response.json()) as ScanResultsData | ScanErrorResponse;

      if (activeRequestRef.current !== requestId) {
        return;
      }

      if (!response.ok) {
        const serverMessage =
          "error" in data && typeof data.error === "string" ? data.error : undefined;

        throw new Error(serverMessage || "This website could not be scanned.");
      }

      if (!isScanResultsData(data)) {
        throw new Error("Invalid scan response.");
      }

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(MIN_SUCCESS_LOADING_MS - elapsed, 0);

      if (remaining > 0) {
        await sleep(remaining);
      }

      if (activeRequestRef.current !== requestId) {
        return;
      }

      setResults(data);
      setScanState("complete");
    } catch (error) {
      if (activeRequestRef.current !== requestId) {
        return;
      }

      const rawMessage = error instanceof Error ? error.message : undefined;

      setResults(null);
      setErrorMessage(getFriendlyErrorMessage(rawMessage));
      setScanState("error");
    }
  }, []);

  const handleRescan = useCallback(() => {
    activeRequestRef.current = 0;
    setScanState("idle");
    setResults(null);
    setErrorMessage(undefined);
    setCurrentUrl("");
  }, []);

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