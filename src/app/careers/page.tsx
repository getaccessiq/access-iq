import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersPageContent from "@/components/CareersPageContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Accessive. Join a team focused on WCAG accessibility audits, remediation, and premium compliance support.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#06111f] text-white">
      <Header />
      <CareersPageContent />
      <Footer />
    </div>
  );
}