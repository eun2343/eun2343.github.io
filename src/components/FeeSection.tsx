
import { Container } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import type { Service } from "../translation/types";
import styles from "./FeeSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const FeeSection = () => {
  const { translations } = useLanguage();
  const cancellationDescription = translations.app.FeePage.cancellationPolicy.description;
  const cancellationCutoffText = cancellationDescription.includes("10:00 am the day before")
    ? "10:00 am the day before"
    : cancellationDescription.includes("bis 10:00 Uhr am Tag vor")
    ? "bis 10:00 Uhr am Tag vor"
    : null;
  const hasCancellationCutoff = !!cancellationCutoffText;
  const cancellationLines = cancellationDescription
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <Container className={styles.root}>
      <div className={styles.content}>
        <h2 className={`headingLarge mb-4 ${styles.headingOffset}`}>{translations.app.FeePage.title}</h2>
        <div className={`mb-8 textDark lineHeightNormal ${styles.headingOffset}`}>
          {translations.app.FeePage.subtitle
            .split("|")
            .map((line: string, lineIndex: number) => (
              <span key={lineIndex}>
                {line}
                {lineIndex < translations.app.FeePage.subtitle.split("|").length - 1 && <br />}
              </span>
            ))}
        </div>
        <div className="maxWFull mt-4">
          {translations.app.FeePage.services.map((service: Service, index: number) => (
            <div key={index} className="card mb-4">
              <h3 className="headingMedium mb-4 textLeft textDark">{service.name}</h3>
              {(service.duration || service.price) && (
                <div className="textDark textLeft mb-3">
                  {service.duration && `${service.duration} `}{service.price}
                </div>
              )}
              <div className="textDark textLeft">{service.description}</div>
            </div>
          ))}
        </div>

        <div className="card mb-4 mt-6">
          <h3 className="headingMedium mb-4 textLeft textDark">{translations.app.FeePage.cancellationPolicy.title}</h3>
          <div className="lineHeightLoose textDark textLg textLeft">
            {cancellationLines.map((line, lineIndex) => {
              if (hasCancellationCutoff && cancellationCutoffText && line.includes(cancellationCutoffText)) {
                const [beforeCutoff, afterCutoff] = line.split(cancellationCutoffText);
                return (
                  <span key={lineIndex}>
                    {beforeCutoff}
                    <strong>{cancellationCutoffText}</strong>
                    {afterCutoff}
                    {lineIndex < cancellationLines.length - 1 && <br />}
                  </span>
                );
              }

              return (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < cancellationLines.length - 1 && <br />}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeeSection;
