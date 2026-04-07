import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FertilityHeroSection from "../components/FertilityHeroSection";
import FertilitySeedSection from "../components/FertilitySeedSection";
import FertilityCareSection from "../components/FertilityCareSection";
import { useState } from "react";

const FertilityPage = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <FertilityHeroSection
        isDescriptionOpen={isDescriptionOpen}
        onToggleDescription={() => setIsDescriptionOpen((prev) => !prev)}
      />
      <FertilitySeedSection isOpen={isDescriptionOpen} />
      <FertilityCareSection />
      <Footer />
    </>
  );
};

export default FertilityPage;
