import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FertilityCareSection from "../components/FertilityCareSection";
import PrePostnatalCareSection from "../components/PrePostnatalCareSection";
import GynecologySection from "../components/GynecologySection";
import TreatmentSection from "../components/TreatmentSection";

const TreatmentPage = () => {
  return (
    <>
      <Navigation />
      <TreatmentSection />
      <FertilityCareSection />
      <PrePostnatalCareSection />
      <GynecologySection />
      <Footer />
    </>
  );
};

export default TreatmentPage;
