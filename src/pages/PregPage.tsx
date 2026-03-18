import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PregnancyHeroSection from "../components/PregnancyHeroSection";
import PrePostnatalCareSection from "../components/PrePostnatalCareSection";

const PregPage = () => {
  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <PregnancyHeroSection />
      <PrePostnatalCareSection />
      <Footer />
    </>
  );
};

export default PregPage;
