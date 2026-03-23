import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpCenterPage from "@/components/HelpCenterPage";

export default function HelpCenterRoute() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#07101d] pt-24">
        <HelpCenterPage />
      </main>

      <Footer />
    </>
  );
}