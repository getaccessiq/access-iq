import Header from "@/components/Header";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import AddOns from "@/components/pricing/AddOns";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing | AccessIQ",
  description:
    "Transparent pricing for accessibility audits, compliance monitoring, and remediation services. Plans for every business size.",
};

export default function PricesPage() {
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