
import { Container } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import styles from "./FertilityCareSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const FertilityCareSection = () => {
  const { translations, language } = useLanguage();
  const fertilityServices = translations.app.FertilityCareSection.services;

  return (
    <div className={styles.root}>
      <Container>
        <h2 className={`headingLarge textCenter ${styles.sectionTitle}`}>
          {language === "en" ? (
            <>
              Advanced{" "}
              <br className={styles.mobileOnlyBreak} />
              Fertility Support
            </>
          ) : (
            translations.app.FertilityCareSection.title
          )}
        </h2>
        <div className={styles.serviceList}>
          {fertilityServices.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <h3 className="headingMedium">{service}</h3>
              <span className={styles.chevron} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FertilityCareSection;
