import { Container } from "@mui/material";
import styles from "./FertilityHeroSection.module.css";
import { useLanguage } from "../translation/useLanguage";
import "../styles/utilities.css";
import "../styles/variables.css";

type FertilityHeroSectionProps = {
  isDescriptionOpen: boolean;
  onToggleDescription: () => void;
};

const FertilityHeroSection = ({
  isDescriptionOpen,
  onToggleDescription,
}: FertilityHeroSectionProps) => {
  const { translations, language } = useLanguage();
  const largeParts = translations.app.FertilityHeroSection.largeText.split(" | ");
  const toggleLabel =
    language === "de"
      ? "Fruchtbarkeitsbeschreibung anzeigen oder ausblenden"
      : "Show or hide fertility description";

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
            <button
              type="button"
              className={styles.arrowButton}
              onClick={onToggleDescription}
              aria-expanded={isDescriptionOpen}
              aria-label={toggleLabel}
            >
              <span className={`${styles.arrowIcon} ${isDescriptionOpen ? styles.open : ""}`} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FertilityHeroSection;
