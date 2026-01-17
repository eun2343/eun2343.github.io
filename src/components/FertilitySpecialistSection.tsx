
import { Container } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import type { Reason } from "../translation/types";
import styles from "./FertilitySpecialistSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const FertilitySpecialistSection = () => {
  const { translations } = useLanguage();

  return (
    <Container className={styles.root}>
      <h2 className="headingLarge textCenter mb-8">{translations.app.WhyChoiTCMPage.title}</h2>
      <div style={{ maxWidth: "100%", marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {translations.app.WhyChoiTCMPage.reasons.map((reason: Reason, index: number) => (
          <div key={index} style={{ marginBottom: 32, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 24, justifyContent: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 80, minHeight: 80, width: 80, height: 80, borderRadius: '50%', background: 'var(--color-secondary)', color: 'var(--color-primary)', fontWeight: 900, fontSize: '2.6rem', marginRight: 14, flexShrink: 0 }}>{index + 1}</span>
            <div style={{ flex: 1, maxWidth: 800 }}>
              <h3 className="headingMedium mb-4" style={{ textAlign: 'left' }}>{reason.title}</h3>
              <div style={{ lineHeight: 1.6, color: 'var(--color-dark)', fontSize: '1.1rem', textAlign: 'left' }}>
                {reason.description.split("|").map((line: string, lineIndex: number) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < reason.description.split("|").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FertilitySpecialistSection;
