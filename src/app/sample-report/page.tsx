import type { Metadata } from "next";
import PremiumWcagReport from "@/components/reports/PremiumWcagReport";

export const metadata: Metadata = {
  title: "Sample WCAG Report | Accessive",
  description:
    "Preview a premium accessibility audit report with executive summary, severity breakdown, and remediation guidance.",
};

export default function SampleReportPage() {
  return <PremiumWcagReport />;
}