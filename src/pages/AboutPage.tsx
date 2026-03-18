import Navigation from "../components/Navigation";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import FeeSection from "../components/FeeSection";

const AboutPage = () => {
  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <AboutSection />
      <FeeSection />
      <Footer />
    </>
  );
};

export default AboutPage;
