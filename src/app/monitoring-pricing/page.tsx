import Header from "@/components/Header";
import MonitorPricing from "@/components/MonitorPricing";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <MonitorPricing />
      </main>

      <Footer />
    </>
  );
}