import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AccessibilitySolutions from "@/components/AccessibilitySolutions";
import DigitalAccessibility from "@/components/DigitalAccessibility";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <HeroSection />
        <AccessibilitySolutions />
        <DigitalAccessibility />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}