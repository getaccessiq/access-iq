import type { Metadata } from "next";
import Header from "@/components/Header";
import AuditHero from "@/components/audit/AuditHero";
import AccessiveManualAuditSection from "@/components/AccessiveManualAuditSection";
import AuditDeliverables from "@/components/audit/AuditDeliverables";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accessibility Audit Services | Accessive",
  description:
    "Expert-led accessibility audits with WCAG 2.2 AA and ADA compliance. Manual testing, remediation roadmap, and legal-ready reports.",
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header />

      <main>
        {/* HERO */}
        <AuditHero />

        {/* 🔥 NEU: DIFFERENTIATION SECTION */}
        <AccessiveManualAuditSection />

        {/* WHAT YOU GET */}
        <AuditDeliverables />

        {/* FINAL CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}