import { Container } from "@mui/material";
import styles from "./PregnancyHeroSection.module.css";
import { useLanguage } from "../translation/useLanguage";
import "../styles/utilities.css";
import "../styles/variables.css";



const PregnancyHeroSection = () => {
  const { translations } = useLanguage();
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
      </Container>
    </div>
  );
};

export default PregnancyHeroSection;
