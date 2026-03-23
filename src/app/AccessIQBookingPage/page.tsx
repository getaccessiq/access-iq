import Header from "@/components/Header";
import AccessIQBookingPage from "@/components/AccessIQBookingPage";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <AccessIQBookingPage />
      </main>

      <Footer />
    </>
  );
}