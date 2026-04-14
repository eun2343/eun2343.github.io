import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PregnancyHeroSection from "../components/PregnancyHeroSection";
import PrePostnatalCareSection from "../components/PrePostnatalCareSection";
import { useState } from "react";

const PregPage = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <PregnancyHeroSection
        isDescriptionOpen={isDescriptionOpen}
        onToggleDescription={() => setIsDescriptionOpen((prev) => !prev)}
      />
      <PrePostnatalCareSection />
      <Footer />
    </>
  );
};

export default PregPage;
