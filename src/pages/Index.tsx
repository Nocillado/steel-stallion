import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import FleetSection from "@/components/FleetSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HeritageSection />
      <FleetSection />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
