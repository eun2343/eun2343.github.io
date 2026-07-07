import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FertilityHeroSection from "../components/FertilityHeroSection";
import FertilitySeedSection from "../components/FertilitySeedSection";
import FertilityCareSection from "../components/FertilityCareSection";
import { useState } from "react";
import styles from "./FertilityPage.module.css";

const FertilityPage = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <div className={styles.heroFlow}>
        <FertilityHeroSection
          isDescriptionOpen={isDescriptionOpen}
          onToggleDescription={() => setIsDescriptionOpen((prev) => !prev)}
        />
        <FertilitySeedSection isOpen={isDescriptionOpen} />
      </div>
      <FertilityCareSection />
      <Footer />
    </>
  );
};

export default FertilityPage;
