
import { Container } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import { renderTextWithLineBreaks } from "../utils/textUtils";
import styles from "./TreatmentSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const TreatmentSection = () => {
  const { translations } = useLanguage();

  return (
    <Container className={styles.root}>
      {/* Hero Image */}
      <div className={styles.heroImage}>
        <img
          src="/images/akupunktur1.jpg"
          alt="Acupuncture Treatment"
          className="wFull"
          style={{ height: "auto", maxHeight: "300px", objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div className={styles.content}>
        <h2 className="headingLarge textCenter mb-4">{translations.app.TreatmentSection.title}</h2>
        <div className={`mb-8 textCenter textDark lineHeightNormal ${styles.subtitle}`}>{translations.app.TreatmentSection.subtitle}</div>

        <div className={styles.treatmentGrid}>
          {/* Left Column - Acupuncture and Herbal Medicine */}
          <div className={styles.leftColumn}>
            {/* Acupuncture */}
            <div className="card">
              <img src="/images/acu.png" alt="Acupuncture" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.acupuncture.title}</h3>
              <div className={`lineHeightLoose textBlack ${styles.acupunctureDescription}`}>
                {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.acupuncture.description)}
              </div>
            </div>
            {/* Herbal Medicine */}
            <div className="card">
              <img src="/images/herb.png" alt="Herbal medicine" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.herbalMedicine.title}</h3>
              <div className="lineHeightLoose textBlack">
                {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.herbalMedicine.description)}
              </div>
            </div>
          </div>

          {/* Right Column - Other treatments */}
          <div className={styles.rightColumn}>
            {/* Blood Analysis */}
            <div className="card">
              <img src="/images/test.png" alt="Analysis of fertility test results" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.bloodAnalysis.title}</h3>
              {translations.app.TreatmentSection.treatments.bloodAnalysis.description && (
                <div className="lineHeightLoose textBlack">
                  {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.bloodAnalysis.description)}
                </div>
              )}
            </div>
            {/* Supplements */}
            <div className="card">
              <img src="/images/supple.png" alt="Supplements recommendation" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.supplements.title}</h3>
              {translations.app.TreatmentSection.treatments.supplements.description && (
                <div className="lineHeightLoose textBlack">
                  {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.supplements.description)}
                </div>
              )}
            </div>
            {/* Fertility Awareness */}
            <div className="card">
              <img src="/images/bbt.png" alt="Fertility awareness practice" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.fertilityAwareness.title}</h3>
              {translations.app.TreatmentSection.treatments.fertilityAwareness.description && (
                <div className="lineHeightLoose textBlack">
                  {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.fertilityAwareness.description)}
                </div>
              )}
            </div>
            {/* Diet and Lifestyle */}
            <div className="card">
              <img src="/images/diet.png" alt="Diet and lifestyle adjustment" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.dietLifestyle.title}</h3>
              {translations.app.TreatmentSection.treatments.dietLifestyle.description && (
                <div className="lineHeightLoose textBlack">
                  {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.dietLifestyle.description)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TreatmentSection;
