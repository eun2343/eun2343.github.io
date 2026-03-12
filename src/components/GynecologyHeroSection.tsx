import { Container } from "@mui/material";
import styles from "./GynecologyHeroSection.module.css";
import { useLanguage } from "../translation/useLanguage";
import "../styles/utilities.css";
import "../styles/variables.css";



const GynecologyHeroSection = () => {
  const { translations } = useLanguage();
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.largeText}>
              {translations.app.GynecologyHeroSection.titleLine1}
              <br />
              {translations.app.GynecologyHeroSection.titleLine2}
            </h1>
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
      </Container>
    </div>
  );
};

export default GynecologyHeroSection;
