import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TreatmentSection from "../components/TreatmentSection";
import FeeSection from "../components/FeeSection";

const TreatmentPage = () => {
  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <TreatmentSection />
      <FeeSection />
      <Footer />
    </>
  );
};

export default TreatmentPage;
