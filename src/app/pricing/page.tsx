import Header from "@/components/Header";
import PricingPageContent from "@/components/pricing/PricingPageContent";
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
      <PricingPageContent />
      <Footer />
    </div>
  );
}
