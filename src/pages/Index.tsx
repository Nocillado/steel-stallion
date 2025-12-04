import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
