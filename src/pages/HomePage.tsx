import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FertilitySpecialistSection from "../components/FertilitySpecialistSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import { useLanguage } from "../translation/useLanguage";

const HomePage = () => {
  const { translations } = useLanguage();
  const t = translations.app.HomePage;

  return (
    <div className="homepage-root">
      <Navigation />
      <HeroSection />
      <div className="responsive-card-wide-container">
        <div
          className="responsive-card-wide flex flexRow itemsStretch wFull"
          style={{ marginBottom: "20px" }}
        >
          <div className="responsive-card-wide-left">
            <span className="responsive-card-title">{t.fertilityCardTitle}</span>
          </div>
          <div className="responsive-card-wide-right">
            <ul className="listUnstyled textXl textPrimary lineHeightRelaxed textLeft ml-2" style={{ fontFamily: 'Lato, system-ui, Avenir, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
              {t.fertilityItems.map((item: string, i: number) => (
                <li key={i} className="responsive-card-list-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="responsive-card-row mt-2">
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
      <FertilitySpecialistSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
