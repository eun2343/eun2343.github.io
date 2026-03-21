import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import DoesTCMWorkSection from "../components/DoesTCMWorkSection";
import FertilitySpecialistSection from "../components/FertilitySpecialistSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import { useLanguage } from "../translation/useLanguage";

const HomePage = () => {
  const { translations } = useLanguage();
  const t = translations.app.HomePage;

  return (
    <div className="homepage-root">
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <HeroSection />
      <div className="responsive-card-row mt-2">
        <div className="responsive-card">
          <div className="responsive-card-content">
            <span className="responsive-card-title">
              <span className="mb-6" style={{ display: 'block' }}>{t.fertilityCardTitle}</span>
            </span>
            <ul className="responsive-card-list">
              {t.fertilityItems.map((item: string, i: number) => (
                <li key={i} className="responsive-card-list-item-centered">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {[1, 2].map((cardIdx) => (
          <div key={cardIdx} className="responsive-card">
            <div className="responsive-card-content">
              <span className="responsive-card-title">
                {cardIdx === 1 ? (
                  <span className="mb-6" style={{ display: 'block' }}>{t.gynecologyTitle}</span>
                ) : (
                  <span className="mb-6" style={{ display: 'block' }}>{t.pregnancyTitle}</span>
                )}
              </span>
              <ul className="responsive-card-list">
                {cardIdx === 1 ? (
                  t.gynecologyItems.map((item: string, i: number) => (
                    <li key={i} className="responsive-card-list-item-centered">{item}</li>
                  ))
                ) : (
                  t.pregnancyItems.map((item: string, i: number) => (
                    <li key={i} className="responsive-card-list-item-centered">{item}</li>
                  ))
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <DoesTCMWorkSection />
      <FertilitySpecialistSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
