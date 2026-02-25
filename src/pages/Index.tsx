import HeroSection from "@/components/HeroSection";
import ModesSection from "@/components/ModesSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import DataSection from "@/components/DataSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ModesSection />
      <ProductSection />
      <BenefitsSection />
      <DataSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
