
import { Container } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import styles from "./GynecologySection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const GynecologySection = () => {
  const { translations } = useLanguage();
  const gynecologyServices = translations.app.HomePage.gynecologyItems;

  return (
    <div className={styles.root}>
      <Container>
        <h2 className={`headingLarge textCenter ${styles.sectionTitle}`}>{translations.app.GynecologySection.title}</h2>
        <div className={styles.serviceList}>
          {gynecologyServices.map((service, index) => (
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

export default GynecologySection;
