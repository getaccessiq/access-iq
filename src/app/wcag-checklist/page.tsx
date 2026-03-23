import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WCAGChecklistPageContent from "@/components/WCAGChecklistPageContent";

export const metadata = {
  title: "WCAG Checklist | AccessIQ",
  description:
    "Explore a practical WCAG 2.1 checklist covering Level A, AA, and AAA. Use it for audits, remediation and accessibility compliance workflows.",
};

export default function WCAGChecklistPage() {
  return (
    <div className="min-h-screen bg-[#06111f] text-white">
      <Header />
      <WCAGChecklistPageContent />
      <Footer />
    </div>
  );
}