"use client";

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

interface ScanResultsProps {
  results: ScanResultsData;
  onRescan: () => void;
}

export default function ScanResults({ results, onRescan }: ScanResultsProps) {
  return (
    <section className="min-h-screen bg-[#0a0e1a] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold">Scan Results</h1>
        <p className="mt-4 text-white/70">{results.url}</p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <p>Total issues: {results.counts.total}</p>
          <p>Critical: {results.counts.critical}</p>
          <p>Serious: {results.counts.serious}</p>
          <p>Moderate: {results.counts.moderate}</p>
          <p>Minor: {results.counts.minor}</p>
        </div>

        <button
          type="button"
          onClick={onRescan}
          className="mt-8 rounded-full bg-cyan-400 px-5 py-3 font-medium text-black"
        >
          Run another scan
        </button>
      </div>
    </section>
  );
}
