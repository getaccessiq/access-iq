import type { Metadata } from "next";
import Header from "@/components/Header";
import MonitorPricing from "@/components/MonitorPricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Monitoring",
  description:
    "Accessive monitoring keeps your website compliant with continuous accessibility checks, issue tracking, and real-time insights.",
};

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-[#06111f] text-white">
      <Header />

      <main className="pt-24">
        <MonitorPricing />
      </main>

      <Footer />
    </div>
  );
}