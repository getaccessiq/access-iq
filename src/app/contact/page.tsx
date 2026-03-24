import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactPageContent from "@/components/contact/ContactPageContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to an accessibility expert at Accessive. Get help with WCAG 2.2 AA, ADA compliance audits, remediation, and continuous monitoring.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#06111f] text-white">
      <Header />

      <main>
        <ContactPageContent />
      </main>

      <Footer />
    </div>
  );
}