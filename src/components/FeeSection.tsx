
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
      <div className={styles.content}>
        <h2 className="headingLarge mb-4">{translations.app.FeePage.title}</h2>
        <div className="mb-8 textDark lineHeightNormal">
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
          <div className="lineHeightLoose textDark textLg textLeft">{translations.app.FeePage.cancellationPolicy.description}</div>
        </div>
      </div>
    </Container>
  );
};

export default FeeSection;
