
import { Container } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import type { Service } from "../translation/types";
import styles from "./FeeSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const FeeSection = () => {
  const { translations } = useLanguage();

  return (
    <Container className={styles.root}>
      <h2 className="headingLarge mb-4">{translations.app.FeePage.title}</h2>
      <div className="mb-8" style={{ color: 'var(--color-dark)', lineHeight: 1.6 }}>
        {translations.app.FeePage.subtitle
          .split("|")
          .map((line: string, lineIndex: number) => (
            <span key={lineIndex}>
              {line}
              {lineIndex < translations.app.FeePage.subtitle.split("|").length - 1 && <br />}
            </span>
          ))}
      </div>
      <div style={{ maxWidth: "100%", marginTop: 32 }}>
        {translations.app.FeePage.services.map((service: Service, index: number) => (
          <div key={index} className="card mb-4">
            <h3 className="headingMedium mb-4" style={{ textAlign: 'left', color: 'var(--color-dark)' }}>{service.name}</h3>
            <div style={{ color: 'var(--color-dark)', textAlign: 'left' }}>{service.description}</div>
          </div>
        ))}
      </div>

      <div className="card mb-4" style={{ marginTop: 48 }}>
        <h3 className="headingMedium mb-4" style={{ textAlign: 'left', color: 'var(--color-dark)' }}>{translations.app.FeePage.cancellationPolicy.title}</h3>
        <div style={{ lineHeight: 1.8, color: 'var(--color-dark)', fontSize: '1.1rem', textAlign: 'left' }}>{translations.app.FeePage.cancellationPolicy.description}</div>
      </div>
    </Container>
  );
};

export default FeeSection;
