import { Container } from "@mui/material";
import styles from "./FertilitySeedSection.module.css";
import { useLanguage } from "../translation/useLanguage";
import "../styles/utilities.css";

type FertilitySeedSectionProps = {
  isOpen: boolean;
};

const FertilitySeedSection = ({ isOpen }: FertilitySeedSectionProps) => {
  const { translations, language } = useLanguage();
  const parts = translations.app.FertilitySeedSection.text.split(" | ");
  const emphasisLine = "Fertility works in much the same way.";
  const seedLine = "A healthy egg or sperm is like a strong, viable seed.";
  const shouldAddGermanExtraBreak = (line: string) =>
    language === "de" && /(?:können\.|ähnlich\.|Samen\.)$/.test(line);

  return (
    <section className={`${styles.root} ${isOpen ? styles.rootOpen : ""}`}>
      <Container>
        <div className={`${styles.panel} ${isOpen ? styles.open : ""}`}>
          <div className={`${styles.text} textDark textLg lineHeightNormal textLeft`}>
          {parts.map((part: string, i: number) => (
            <span key={i}>
              {part.trim() === emphasisLine && <br />}
              {i === 0 && <br />}
              {part.includes(seedLine) ? (
                <>
                  {part.split(seedLine)[0]}
                  <br />
                  {seedLine}
                  <br />
                  {part.split(seedLine)[1]}
                </>
              ) : i === 0 ? (
                <strong>{part}</strong>
              ) : (
                part
              )}
              {i < parts.length - 1 && <br />}
              {shouldAddGermanExtraBreak(part.trim()) && <br />}
              {i === 0 && <br />}
              {part.trim() === emphasisLine && <br />}
            </span>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FertilitySeedSection;
