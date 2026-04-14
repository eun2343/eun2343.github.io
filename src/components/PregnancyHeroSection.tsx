import { Container } from "@mui/material";
import styles from "./PregnancyHeroSection.module.css";
import { useLanguage } from "../translation/useLanguage";
import "../styles/utilities.css";
import "../styles/variables.css";

type PregnancyHeroSectionProps = {
  isDescriptionOpen: boolean;
  onToggleDescription: () => void;
};

const PregnancyHeroSection = ({
  isDescriptionOpen,
  onToggleDescription,
}: PregnancyHeroSectionProps) => {
  const { translations, language } = useLanguage();
  const toggleLabel =
    language === "de"
      ? "Schwangerschaftsbeschreibung anzeigen oder ausblenden"
      : "Show or hide pregnancy description";

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.largeText}>
              {translations.app.PregnancyHeroSection.titleLines.map((line: string, index: number) => (
                <span key={index}>
                  {index > 0 && <br />}
                  {line}
                </span>
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
            <div className={`${styles.descriptionPanel} ${isDescriptionOpen ? styles.panelOpen : ""}`}>
              <p className={styles.smallText}>
                {translations.app.PregnancyHeroSection.descriptionLines.map((line: string, index: number) => (
                  <span key={index}>
                    {index > 0 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PregnancyHeroSection;
