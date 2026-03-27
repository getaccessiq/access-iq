import type { Metadata } from "next";
import Header from "@/components/Header";
import ComplianceHero from "@/components/compliance/ComplianceHero";
import ComplianceServices from "@/components/compliance/ComplianceServices";
import AccessiveDeliverablesSection from "@/components/compliance/AccessiveDeliverablesSection";
import CertificationPortal from "@/components/compliance/CertificationPortal";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Compliance Standards",
  description:
    "Meet WCAG 2.2 AA, ADA, Section 508, and EN 301 549 requirements with Accessive. Human-verified audits, developer-ready fixes, and continuous monitoring.",
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header />

      <main>
        {/* HERO */}
        <ComplianceHero />

        {/* SERVICES */}
        <ComplianceServices />

        {/* 🔥 NEW: WHAT YOU GET / DELIVERABLES */}
        <AccessiveDeliverablesSection />

        {/* PORTAL & MONITORING */}
        <CertificationPortal />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}