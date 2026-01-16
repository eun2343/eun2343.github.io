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
          margin: 96px auto 0 auto; /* Increased gap above */
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
          margin: 64px auto 180px auto; /* Much greater gap below */
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
        <div className="responsive-card-wide" style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', width: '100%' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 32px', boxSizing: 'border-box', borderRight: '1px solid #e0e0e0' }}>
            <span className="responsive-card-title">Fertility treatment to increase your chance</span>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 32px', boxSizing: 'border-box' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.25rem', color: '#915446', fontFamily: 'HK Grotesk, system-ui, Avenir, Helvetica, Arial, sans-serif', fontWeight: 500, lineHeight: 1.7, textAlign: 'left', marginLeft: '16px' }}>
              <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>Getting pregnant naturally</li>
              <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>IVF and IUI</li>
              <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>Donor egg / sperm / embryo</li>
              <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>Fertility over 40</li>
              <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>Low AMH</li>
              <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>Repeated miscarriage</li>
              <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>Male fertility</li>
              <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>Social freezing</li>
              <li style={{ paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', marginLeft: '-48px' }}>Single mom / Same sex couple</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="responsive-card-row">
        {[1,2].map((cardIdx) => (
          <div key={cardIdx} className="responsive-card">
            <div className="responsive-card-content">
              <span className="responsive-card-title">
                {cardIdx === 1 ? (
                  <span style={{ display: 'block', marginBottom: '40px' }}>Gynecology and more</span>
                ) : (
                  <span style={{ display: 'block', marginBottom: '40px' }}>Pre - Postnatal Care</span>
                )}
              </span>
              <ul className="responsive-card-list">
                {cardIdx === 1 ? (
                  <>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Painful period, Irregular cycle</li>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>PCOS</li>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Endometriosis, Myoma</li>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>PMS</li>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Premature ovarian failure</li>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Thyroid dysfunction</li>
                    <li style={{ paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Stress and Anxiety</li>
                  </>
                ) : (
                  <>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Prevent pregnancy complications</li>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Breech presentation</li>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Easy and smooth Labor</li>
                    <li style={{ borderBottom: '2px solid #a1a1a1', paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Nursing issues</li>
                    <li style={{ paddingBottom: '8px', marginBottom: '8px', color: '#1a1a1a', textAlign: 'center', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>After delivery Care</li>
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
