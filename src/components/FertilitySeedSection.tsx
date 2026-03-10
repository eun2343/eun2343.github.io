import { Container } from "@mui/material";
import styles from "./FertilitySeedSection.module.css";
import { useLanguage } from "../translation/useLanguage";

const FertilitySeedSection = () => {
  const { translations } = useLanguage();
  const parts = translations.app.FertilitySeedSection.text.split(" | ");

  return (
    <section className={styles.root}>
      <Container>
        <p className={styles.text}>
          {parts.map((part: string, i: number) => (
            <span key={i}>{part}{i < parts.length - 1 && <br />}</span>
          ))}
        </p>
      </Container>
    </section>
  );
};

export default FertilitySeedSection;
