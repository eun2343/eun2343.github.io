
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../translation/useLanguage";
import { getLocalizedPath } from "../utils/routes";
import styles from "./TreatmentSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const TreatmentSection = () => {
  const { translations, language } = useLanguage();
  const acupunctureDescriptionLines = translations.app.TreatmentSection.treatments.acupuncture.description
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
  const herbalDescriptionLines = translations.app.TreatmentSection.treatments.herbalMedicine.description
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
  const bloodAnalysisDescriptionLines = translations.app.TreatmentSection.treatments.bloodAnalysis.description
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
  const supplementsDescriptionLines = translations.app.TreatmentSection.treatments.supplements.description
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
  const fertilityAwarenessDescriptionLines = translations.app.TreatmentSection.treatments.fertilityAwareness.description
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
  const dietLifestyleDescriptionLines = translations.app.TreatmentSection.treatments.dietLifestyle.description
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
  const [acupunctureLead, ...acupuncturePoints] = acupunctureDescriptionLines;

  return (
    <Container className={styles.root}>
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
              <div className={`textBlack ${styles.cardDescription}`}>
                <p className={styles.cardLead}>{acupunctureLead}</p>
                {acupuncturePoints.length > 0 && (
                  <ol className={styles.cardList}>
                    {acupuncturePoints.map((point, index) => (
                      <li key={index}>{point.replace(/^\d+\.\s*/, "")}</li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
            {/* Herbal Medicine */}
            <div className="card">
              <img src="/images/herb.png" alt="Herbal medicine" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.herbalMedicine.title}</h3>
              <div className={`textBlack ${styles.cardDescription}`}>
                {herbalDescriptionLines.map((line, index) => (
                  <p key={index} className={styles.cardLead}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Other treatments */}
          <div className={styles.rightColumn}>
            {/* Blood Analysis */}
            <div className="card">
              <img src="/images/test.png" alt="Analysis of fertility test results" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.bloodAnalysis.title}</h3>
              {bloodAnalysisDescriptionLines.length > 0 && (
                <div className={`textBlack ${styles.cardDescription}`}>
                  {bloodAnalysisDescriptionLines.map((line, index) => (
                    <p key={index} className={styles.cardLead}>{line}</p>
                  ))}
                </div>
              )}
            </div>
            {/* Supplements */}
            <div className="card">
              <img src="/images/supple.png" alt="Supplements recommendation" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.supplements.title}</h3>
              {supplementsDescriptionLines.length > 0 && (
                <div className={`textBlack ${styles.cardDescription}`}>
                  {supplementsDescriptionLines.map((line, index) => (
                    <p key={index} className={styles.cardLead}>{line}</p>
                  ))}
                </div>
              )}
            </div>
            {/* Fertility Awareness */}
            <div className="card">
              <img src="/images/bbt.png" alt="Fertility awareness practice" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.fertilityAwareness.title}</h3>
              {fertilityAwarenessDescriptionLines.length > 0 && (
                <div className={`textBlack ${styles.cardDescription}`}>
                  {fertilityAwarenessDescriptionLines.map((line, index) => (
                    <p key={index} className={styles.cardLead}>{line}</p>
                  ))}
                </div>
              )}
            </div>
            {/* Diet and Lifestyle */}
            <div className="card">
              <img src="/images/diet.png" alt="Diet and lifestyle adjustment" className={styles.cardImage} />
              <h3 className="headingMedium mb-4 textInherit">{translations.app.TreatmentSection.treatments.dietLifestyle.title}</h3>
              {dietLifestyleDescriptionLines.length > 0 && (
                <div className={`textBlack ${styles.cardDescription}`}>
                  {dietLifestyleDescriptionLines.map((line, index) => (
                    <p key={index} className={styles.cardLead}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bookButtonWrapper}>
          <Button
            component={Link}
            to={getLocalizedPath("contact", language)}
            variant="contained"
            sx={{
              backgroundColor: "#A6463D",
              color: "#FFFFFF",
              textTransform: "none",
              borderRadius: "12px",
              padding: "10px 24px",
              width: { xs: "80%", sm: "200px" },
              fontSize: "1rem !important",
              "&:hover": { backgroundColor: "#8f3830" },
            }}
            className="fontMain"
          >
            {translations.app.Navigation.bookAppointment}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default TreatmentSection;
