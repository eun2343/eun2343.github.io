import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GynecologyHeroSection from "../components/GynecologyHeroSection";
import GynecologySection from "../components/GynecologySection";
import { useState } from "react";

const GynPage = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <GynecologyHeroSection
        isDescriptionOpen={isDescriptionOpen}
        onToggleDescription={() => setIsDescriptionOpen((prev) => !prev)}
      />
      <GynecologySection />
      <Footer />
    </>
  );
};

export default GynPage;
