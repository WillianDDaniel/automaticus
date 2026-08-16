import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import BusinessTypesSection from "./components/BusinessTypesSection";
import FeaturesSection from "./components/FeaturesSection";
import UpdateSection from "./components/UpdateSection";
import BenefitsSection from "./components/BenefitsSection";
import StatementSection from "./components/StatementSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <HowItWorksSection />
        <BusinessTypesSection />
        <FeaturesSection />
        <UpdateSection />
        <BenefitsSection />
        <StatementSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
