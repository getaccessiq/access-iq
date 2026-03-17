import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AccessibilitySolutions from "@/components/AccessibilitySolutions";
import DigitalAccessibility from "@/components/DigitalAccessibility";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <HeroSection />
        <AccessibilitySolutions />
        <DigitalAccessibility />
      </main>

      <Footer />
    </>
  );
}