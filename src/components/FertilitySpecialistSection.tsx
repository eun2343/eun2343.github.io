
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../translation/useLanguage";
import type { Reason } from "../translation/types";
import { renderTextWithLineBreaks } from "../utils/textUtils";
import { getLocalizedPath } from "../utils/routes";
import styles from "./FertilitySpecialistSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const FertilitySpecialistSection = () => {
  const { translations, language } = useLanguage();

  return (
    <Container className={styles.root}>
      <h2 className="headingLarge textCenter mb-8">{translations.app.WhyChoiTCMPage.title}</h2>
      <div className="maxWFull mt-4 flex flexCol itemsCenter">
        {translations.app.WhyChoiTCMPage.reasons.map((reason: Reason, index: number) => (
          <div key={index} className="mb-4 flex flexRow itemsStart justifyCenter" style={{ gap: 24 }}>
            <span className={`${styles.numberBadge} flex itemsCenter justifyCenter fontBlack text3xl mr-2`} style={{ borderRadius: '50%', background: '#FFF5F0', flexShrink: 0 }}>{index + 1}</span>
            <div style={{ flex: 1, maxWidth: 800 }}>
              <h3 className="headingMedium mb-4 textLeft">{reason.title}</h3>
              <div className="lineHeightNormal textDark textLg textLeft">
                {renderTextWithLineBreaks(reason.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="textCenter" style={{ marginTop: 24 }}>
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
            "&:hover": {
              backgroundColor: "#A6463D",
              color: "#FFFFFF",
            },
          }}
          className="fontMain"
        >
          {translations.app.Navigation.bookAppointment}
        </Button>
      </div>
    </Container>
  );
};

export default FertilitySpecialistSection;
