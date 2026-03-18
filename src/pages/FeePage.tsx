import Navigation from "../components/Navigation";
import FeeSection from "../components/FeeSection";
import Footer from "../components/Footer";

const FeePage = () => {
  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <FeeSection />
      <Footer />
    </>
  );
};

export default FeePage;
