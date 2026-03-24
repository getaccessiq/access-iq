import type { Metadata } from "next";
import Header from "@/components/Header";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import AddOns from "@/components/pricing/AddOns";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for WCAG accessibility audits, remediation, and monitoring. Accessive helps you achieve compliance faster with expert-led solutions.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PricingHero />
      <PricingCards />
      <AddOns />
      <CTASection />
      <Footer />
    </div>
  );
}