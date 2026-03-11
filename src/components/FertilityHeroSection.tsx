import { Container } from "@mui/material";
import styles from "./FertilityHeroSection.module.css";
import { useLanguage } from "../translation/useLanguage";
import "../styles/utilities.css";
import "../styles/variables.css";

const FertilityHeroSection = () => {
  const { translations } = useLanguage();
  const largeParts = translations.app.FertilityHeroSection.largeText.split(" | ");

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.smallText}>{translations.app.FertilityHeroSection.smallText}</p>
            <h1 className={styles.largeText}>
              {largeParts.map((part: string, i: number) => (
                <span key={i}>{part}{i < largeParts.length - 1 && <br />}</span>
              ))}
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FertilityHeroSection;
