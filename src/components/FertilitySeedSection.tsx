import { Container } from "@mui/material";
import styles from "./FertilitySeedSection.module.css";
import { useLanguage } from "../translation/useLanguage";
import "../styles/utilities.css";

const FertilitySeedSection = () => {
  const { translations } = useLanguage();
  const parts = translations.app.FertilitySeedSection.text.split(" | ");
  const emphasisLine = "Fertility works in much the same way.";
  const seedLine = "A healthy egg or sperm is like a strong, viable seed.";

  return (
    <section className={styles.root}>
      <Container>
        <div className={`${styles.text} textDark textLg lineHeightNormal textLeft`}>
          {parts.map((part: string, i: number) => (
            <span key={i}>
              {part.trim() === emphasisLine && <br />}
              {i === 0 && <><br /><br /></>}
              {part.includes(seedLine) ? (
                <>
                  {part.split(seedLine)[0]}
                  <br />
                  {seedLine}
                  <br />
                  {part.split(seedLine)[1]}
                </>
              ) : (
                part
              )}
              {i < parts.length - 1 && <br />}
              {i === 0 && <br />}
              {part.trim() === emphasisLine && <br />}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FertilitySeedSection;
