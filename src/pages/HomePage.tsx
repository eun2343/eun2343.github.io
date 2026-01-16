import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FertilitySpecialistSection from "../components/FertilitySpecialistSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <style>{`
        .responsive-card-wide-container {
          display: flex;
          justify-content: center;
          margin: 48px auto 0 auto;
          max-width: 1200px;
        }
        .responsive-card-wide {
          background: #F2EBE6;
          border-radius: 32px;
          width: 100%;
          min-height: 220px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #915446;
          font-weight: 600;
          max-width: 1040px;
        }
        @media (max-width: 900px) {
          .responsive-card-wide-container {
            margin: 32px 0 0 0;
            padding: 0 8px;
          }
          .responsive-card-wide {
            min-width: 0;
            max-width: 100%;
            border-radius: 24px;
            font-size: 1.1rem;
          }
        }
        .responsive-card-row {
          display: flex;
          gap: 32px;
          justify-content: center;
          margin: 64px auto 32px auto;
          max-width: 1200px;
        }
        @media (max-width: 900px) {
          .responsive-card-row {
            flex-direction: column;
            gap: 24px;
            align-items: center;
          }
        }
        .responsive-card {
          background: #F2EBE6;
          border-radius: 32px;
          min-width: 260px;
          max-width: 500px;
          width: 100%;
          flex: 1;
          min-height: 220px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #915446;
          font-weight: 600;
        }
        .responsive-card-content {
          width: 100%;
          text-align: center;
          padding: 40px 32px;
          box-sizing: border-box;
        }
        .responsive-card-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1A1A1A;
          font-family: 'Playfair Display', serif;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 18px;
        }
        .responsive-card-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 1.25rem;
          color: #915446;
          font-family: 'HK Grotesk', system-ui, Avenir, Helvetica, Arial, sans-serif;
          font-weight: 500;
          line-height: 1.7;
          text-align: center;
        }
      `}</style>
      <Navigation />
      <HeroSection />
      <div className="responsive-card-wide-container">
        <div className="responsive-card-wide">
          <div className="responsive-card-content">
            <span className="responsive-card-title">Advanced fertility treatment</span>
          </div>
        </div>
      </div>
      <div className="responsive-card-row">
        {[1,2].map((cardIdx) => (
          <div key={cardIdx} className="responsive-card">
            <div className="responsive-card-content">
              <span className="responsive-card-title">
                {cardIdx === 1 ? 'Gynecology and more' : 'Pre - Postnatal Care'}
              </span>
              <ul className="responsive-card-list">
                {cardIdx === 1 ? (
                  <>
                   
                  </>
                ) : (
                  <>
                   
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
    </>
  );
};

export default HomePage;
