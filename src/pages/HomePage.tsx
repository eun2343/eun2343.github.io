import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FertilitySpecialistSection from "../components/FertilitySpecialistSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const HomePage = () => {
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
            <span className="responsive-card-title">
              Fertility treatment to increase your chance
            </span>
          </div>
          <div className="responsive-card-wide-right">
            <ul
              className="listUnstyled textXl textPrimary lineHeightRelaxed textLeft ml-2 fontAlt"
              style={{ fontWeight: 500 }}
            >
              <li className="responsive-card-list-item">
                Getting pregnant naturally
              </li>
              <li className="responsive-card-list-item">IVF and IUI</li>
              <li className="responsive-card-list-item">
                Donor egg / sperm / embryo
              </li>
              <li className="responsive-card-list-item">Fertility over 40</li>
              <li className="responsive-card-list-item">Low AMH</li>
              <li className="responsive-card-list-item">
                Repeated miscarriage
              </li>
              <li className="responsive-card-list-item">Male fertility</li>
              <li className="responsive-card-list-item">Social freezing</li>
              <li className="responsive-card-list-item">
                Single mom / Same sex couple
              </li>
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
                  <span className="mb-6" style={{ display: "block" }}>
                    Gynecology
                  </span>
                ) : (
                  <span className="mb-6" style={{ display: "block" }}>
                    Pre - Postnatal Care
                  </span>
                )}
              </span>
              <ul className="responsive-card-list">
                {cardIdx === 1 ? (
                  <>
                    <li className="responsive-card-list-item-centered">
                      Painful period, Irregular cycle
                    </li>
                    <li className="responsive-card-list-item-centered">PCOS</li>
                    <li className="responsive-card-list-item-centered">
                      Endometriosis, Myoma
                    </li>
                    <li className="responsive-card-list-item-centered">PMS</li>
                    <li className="responsive-card-list-item-centered">
                      Premature ovarian failure
                    </li>
                    <li className="responsive-card-list-item-centered">
                      Thyroid dysfunction
                    </li>
                    <li className="responsive-card-list-item-centered">
                      Stress and Anxiety
                    </li>
                    <li className="responsive-card-list-item-centered">
                      Menopause
                    </li>
                  </>
                ) : (
                  <>
                    <li className="responsive-card-list-item-centered">
                      Prevent pregnancy complications
                    </li>
                    <li className="responsive-card-list-item-centered">
                      Breech presentation
                    </li>
                    <li className="responsive-card-list-item-centered">
                      Easy and smooth Labor
                    </li>
                    <li className="responsive-card-list-item-centered">
                      Nursing issues
                    </li>
                    <li className="responsive-card-list-item-centered">
                      After delivery Care
                    </li>
                  </>
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
