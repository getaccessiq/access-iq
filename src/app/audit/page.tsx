import type { Metadata } from "next";
import Header from "@/components/Header";
import AuditHero from "@/components/audit/AuditHero";
import WhatYouGet from "@/components/audit/WhatYouGet";
import HowAuditWorks from "@/components/audit/HowAuditWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accessibility Audit Services",
  description:
    "Expert-led accessibility audits with WCAG 2.2 AA and ADA compliance. Get certified documentation, remediation roadmaps, and legal-ready reports with Accessive.",
};

export default function AuditPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AuditHero />
      <WhatYouGet />
      <HowAuditWorks />
      <CTASection />
      <Footer />
    </div>
  );
}