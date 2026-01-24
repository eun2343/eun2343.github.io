
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

      <h2 className="headingLarge textCenter mb-4">{translations.app.TreatmentSection.title}</h2>
      <div className="textCenter mb-8 textMuted">{translations.app.TreatmentSection.subtitle}</div>

      <div className="flex" style={{ gap: "32px", alignItems: "flex-start" }}>
        {/* Left Column - Acupuncture and Herbal Medicine */}
        <div className="flex flexCol" style={{ flex: "1.3", gap: "32px" }}>
          {/* Acupuncture */}
          <div className="card">
            <h3 className="headingMedium mb-4 textPrimary">{translations.app.TreatmentSection.treatments.acupuncture.title}</h3>
            <div className="lineHeightLoose textGray">
              {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.acupuncture.description)}
            </div>
          </div>
          {/* Herbal Medicine */}
          <div className="card">
            <h3 className="headingMedium mb-4 textPrimary">{translations.app.TreatmentSection.treatments.herbalMedicine.title}</h3>
            <div className="lineHeightLoose textGray">
              {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.herbalMedicine.description)}
            </div>
          </div>
        </div>

        {/* Right Column - Other treatments */}
        <div className="flex flexCol" style={{ flex: "1", gap: "32px" }}>
          {/* Blood Analysis */}
          <div className="card">
            <h3 className="headingMedium mb-4 textPrimary">{translations.app.TreatmentSection.treatments.bloodAnalysis.title}</h3>
            {translations.app.TreatmentSection.treatments.bloodAnalysis.description && (
              <div className="lineHeightLoose textGray">
                {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.bloodAnalysis.description)}
              </div>
            )}
          </div>
          {/* Supplements */}
          <div className="card">
            <h3 className="headingMedium mb-4 textPrimary">{translations.app.TreatmentSection.treatments.supplements.title}</h3>
            {translations.app.TreatmentSection.treatments.supplements.description && (
              <div className="lineHeightLoose textGray">
                {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.supplements.description)}
              </div>
            )}
          </div>
          {/* Fertility Awareness */}
          <div className="card">
            <h3 className="headingMedium mb-4 textPrimary">{translations.app.TreatmentSection.treatments.fertilityAwareness.title}</h3>
            {translations.app.TreatmentSection.treatments.fertilityAwareness.description && (
              <div className="lineHeightLoose textGray">
                {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.fertilityAwareness.description)}
              </div>
            )}
          </div>
          {/* Diet and Lifestyle */}
          <div className="card">
            <h3 className="headingMedium mb-4 textPrimary">{translations.app.TreatmentSection.treatments.dietLifestyle.title}</h3>
            {translations.app.TreatmentSection.treatments.dietLifestyle.description && (
              <div className="lineHeightLoose textGray">
                {renderTextWithLineBreaks(translations.app.TreatmentSection.treatments.dietLifestyle.description)}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TreatmentSection;
