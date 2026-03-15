import Header from "@/components/Header";
import AuditPricing from "@/components/AuditPricing";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <AuditPricing />
      </main>

      <Footer />
    </>
  );
}