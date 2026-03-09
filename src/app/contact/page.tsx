import Header from "@/components/Header";
import ContactPageContent from "@/components/contact/ContactPageContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | AccessIQ",
  description:
    "Talk to an accessibility compliance expert. Get help with WCAG 2.2 AA, ADA compliance audits, remediation, and continuous monitoring.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactPageContent />
      <Footer />
    </div>
  );
}
