import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpCenterPage from "@/components/HelpCenterPage";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Browse the Accessive Help Center for accessibility guides, WCAG resources, compliance insights, and practical support content.",
};

export default function HelpCenterRoute() {
  return (
    <div className="min-h-screen bg-[#06111f] text-white">
      <Header />

      <main className="pt-24">
        <HelpCenterPage />
      </main>

      <Footer />
    </div>
  );
}