
import { Container } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
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

      <div className="flex flexCol gap4">
        {/* Acupuncture */}
        <div className="card mb-4">
          <h3 className="headingMedium mb-4 textBlue">{translations.app.TreatmentSection.treatments.acupuncture.title}</h3>
          <div className="lineHeightLoose textGray">{translations.app.TreatmentSection.treatments.acupuncture.description}</div>
        </div>
        {/* Herbal Medicine */}
        <div className="card mb-4">
          <h3 className="headingMedium mb-4 textBlue">{translations.app.TreatmentSection.treatments.herbalMedicine.title}</h3>
          <div className="lineHeightLoose textGray">{translations.app.TreatmentSection.treatments.herbalMedicine.description}</div>
        </div>
      </div>
    </Container>
  );
};

export default TreatmentSection;
