import type { Metadata } from "next";
import Header from "@/components/Header";
import AuditPricing from "@/components/AuditPricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore Accessive pricing for WCAG accessibility audits, remediation support, and ongoing compliance. Transparent pricing for serious accessibility.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AuditPricing />
      <Footer />
    </div>
  );
}