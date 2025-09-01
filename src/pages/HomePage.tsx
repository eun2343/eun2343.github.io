import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FertilityCareSection from "../components/FertilityCareSection";
import PrePostnatalCareSection from "../components/PrePostnatalCareSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GynecologySection from "../components/GynecologySection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FertilityCareSection />
      <PrePostnatalCareSection />
      <TestimonialsSection />
      <GynecologySection />
      <Footer />
    </>
  );
};

export default HomePage;
