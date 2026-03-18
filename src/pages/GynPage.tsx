import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GynecologyHeroSection from "../components/GynecologyHeroSection";
import GynecologySection from "../components/GynecologySection";

const GynPage = () => {
  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <GynecologyHeroSection />
      <GynecologySection />
      <Footer />
    </>
  );
};

export default GynPage;
