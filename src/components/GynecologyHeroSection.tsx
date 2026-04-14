import { Container } from "@mui/material";
import styles from "./GynecologyHeroSection.module.css";
import { useLanguage } from "../translation/useLanguage";
import "../styles/utilities.css";
import "../styles/variables.css";

type GynecologyHeroSectionProps = {
  isDescriptionOpen: boolean;
  onToggleDescription: () => void;
};

const GynecologyHeroSection = ({
  isDescriptionOpen,
  onToggleDescription,
}: GynecologyHeroSectionProps) => {
  const { translations, language } = useLanguage();
  const titleLine1 = translations.app.GynecologyHeroSection.titleLine1;
  const titleWithoutSupporting = titleLine1.replace(/^Supporting\s+/i, "");
  const hasSupportingPrefix = titleWithoutSupporting !== titleLine1;
  const toggleLabel =
    language === "de"
      ? "Gynaekologische Beschreibung anzeigen oder ausblenden"
      : "Show or hide gynecology description";

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.largeText}>
              {hasSupportingPrefix ? (
                <>
                  Supporting
                  <br />
                  {titleWithoutSupporting}
                </>
              ) : (
                titleLine1
              )}
              <br />
              {translations.app.GynecologyHeroSection.titleLine2}
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
                {translations.app.GynecologyHeroSection.descriptionLines.map((line: string, index: number) => (
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

export default GynecologyHeroSection;
