import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FertilityHeroSection from "../components/FertilityHeroSection";
import FertilitySeedSection from "../components/FertilitySeedSection";
import FertilityCareSection from "../components/FertilityCareSection";

const FertilityPage = () => {
  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <FertilityHeroSection />
      <FertilitySeedSection />
      <FertilityCareSection />
      <Footer />
    </>
  );
};

export default FertilityPage;
