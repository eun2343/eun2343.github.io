
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../translation/useLanguage";
import { getLocalizedPath } from "../utils/routes";
import styles from "./PrePostnatalCareSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const NHS_BREECH_LINK =
  "https://www.chelwest.nhs.uk/services/maternity/pregnancy-birth/your-pregnancy/a-breech-baby?utm_source=chatgpt.com";
const EASY_LABOR_LINK =
  "https://www.ajogmfm.org/article/S2589-9333%2823%2900414-7/fulltext";
const SHORTEN_LABOR_LINK =
  "https://journals.sagepub.com/doi/10.1177/27683605251382855";

const PrePostnatalCareSection = () => {
  const { translations, language } = useLanguage();
  const [isEarlyPregnancyOpen, setIsEarlyPregnancyOpen] = useState(false);
  const [isPreventComplicationsOpen, setIsPreventComplicationsOpen] =
    useState(false);
  const [isBreechPresentationOpen, setIsBreechPresentationOpen] =
    useState(false);
  const [isEasySmoothLaborOpen, setIsEasySmoothLaborOpen] = useState(false);
  const [isNursingIssuesOpen, setIsNursingIssuesOpen] = useState(false);
  const [isAfterDeliveryCareOpen, setIsAfterDeliveryCareOpen] =
    useState(false);
  const prePostnatalServices =
    translations.app.PrePostnatalCareSection.services;
  const earlyPregnancyDescription =
    translations.app.PrePostnatalCareSection.earlyPregnancyDescription;
  const preventComplicationsDescription =
    translations.app.PrePostnatalCareSection.preventComplicationsDescription;
  const breechPresentationDescription =
    translations.app.PrePostnatalCareSection.breechPresentationDescription;
  const easySmoothLaborDescription =
    translations.app.PrePostnatalCareSection.easySmoothLaborDescription;
  const nursingIssuesDescription =
    translations.app.PrePostnatalCareSection.nursingIssuesDescription;
  const afterDeliveryCareDescription =
    translations.app.PrePostnatalCareSection.afterDeliveryCareDescription;
  const earlyPregnancyParagraphs = earlyPregnancyDescription
    .split("|")
    .map((paragraph: string) => paragraph.trim())
    .filter((paragraph: string) => paragraph.length > 0);
  const preventComplicationsParagraphs = preventComplicationsDescription
    .split("|")
    .map((paragraph: string) => paragraph.trim())
    .filter((paragraph: string) => paragraph.length > 0);
  const breechPresentationParagraphs = breechPresentationDescription
    .split("|")
    .map((paragraph: string) => paragraph.trim())
    .filter((paragraph: string) => paragraph.length > 0);
  const easySmoothLaborParagraphs = easySmoothLaborDescription
    .split("|")
    .map((paragraph: string) => paragraph.trim())
    .filter((paragraph: string) => paragraph.length > 0);
  const nursingIssuesParagraphs = nursingIssuesDescription
    .split("|")
    .map((paragraph: string) => paragraph.trim())
    .filter((paragraph: string) => paragraph.length > 0);
  const afterDeliveryCareParagraphs = afterDeliveryCareDescription
    .split("|")
    .map((paragraph: string) => paragraph.trim())
    .filter((paragraph: string) => paragraph.length > 0);
  const toggleLabel =
    language === "de"
      ? "Beschreibung zur Frühschwangerschaft anzeigen oder ausblenden"
      : "Show or hide early pregnancy description";
  const complicationsToggleLabel =
    language === "de"
      ? "Beschreibung zur Vorbeugung von Schwangerschaftskomplikationen anzeigen oder ausblenden"
      : "Show or hide prevent pregnancy complications description";
  const breechToggleLabel =
    language === "de"
      ? "Beschreibung zur Beckenendlage anzeigen oder ausblenden"
      : "Show or hide breech presentation description";
  const easySmoothLaborToggleLabel =
    language === "de"
      ? "Beschreibung zur Geburtsvorbereitung anzeigen oder ausblenden"
      : "Show or hide easy and smooth labor description";
  const nursingIssuesToggleLabel =
    language === "de"
      ? "Beschreibung zu Stillproblemen anzeigen oder ausblenden"
      : "Show or hide nursing issues description";
  const afterDeliveryCareToggleLabel =
    language === "de"
      ? "Beschreibung zur Nachsorge nach der Geburt anzeigen oder ausblenden"
      : "Show or hide after delivery care description";

  const renderBreechParagraph = (paragraph: string) => {
    const enLinkText = "The NHS also recommends";
    const deLinkText = "Auch der NHS empfiehlt";

    if (paragraph.includes(enLinkText)) {
      return (
        <>
          <a href={NHS_BREECH_LINK} target="_blank" rel="noopener noreferrer">
            {enLinkText}
          </a>
          {paragraph.replace(enLinkText, "")}
        </>
      );
    }

    if (paragraph.includes(deLinkText)) {
      return (
        <>
          <a href={NHS_BREECH_LINK} target="_blank" rel="noopener noreferrer">
            {deLinkText}
          </a>
          {paragraph.replace(deLinkText, "")}
        </>
      );
    }

    return paragraph;
  };

  const renderEasyLaborParagraph = (paragraph: string) => {
    const enLinkText = "Acupuncture may induce labor";
    const deLinkText = "Akupunktur kann die Geburt einleiten";
    const enDurationLinkText = "shorten labor durations";
    const deDurationLinkText = "Geburtsdauer verkuerzen";

    const withLaborDurationLink = (text: string) => {
      if (text.includes(enDurationLinkText)) {
        const [before, after] = text.split(enDurationLinkText);

        return (
          <>
            {before}
            <a
              href={SHORTEN_LABOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              {enDurationLinkText}
            </a>
            {after}
          </>
        );
      }

      if (text.includes(deDurationLinkText)) {
        const [before, after] = text.split(deDurationLinkText);

        return (
          <>
            {before}
            <a
              href={SHORTEN_LABOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              {deDurationLinkText}
            </a>
            {after}
          </>
        );
      }

      return text;
    };

    if (paragraph.includes(enLinkText)) {
      const textAfterPrimaryLink = paragraph.replace(enLinkText, "");

      return (
        <>
          <a href={EASY_LABOR_LINK} target="_blank" rel="noopener noreferrer">
            {enLinkText}
          </a>
          {withLaborDurationLink(textAfterPrimaryLink)}
        </>
      );
    }

    if (paragraph.includes(deLinkText)) {
      const textAfterPrimaryLink = paragraph.replace(deLinkText, "");

      return (
        <>
          <a href={EASY_LABOR_LINK} target="_blank" rel="noopener noreferrer">
            {deLinkText}
          </a>
          {withLaborDurationLink(textAfterPrimaryLink)}
        </>
      );
    }

    return withLaborDurationLink(paragraph);
  };

  return (
    <div className={styles.root}>
      <Container>
        <h2 className={`headingLarge textCenter ${styles.sectionTitle}`}>{translations.app.PrePostnatalCareSection.title}</h2>
        <div className={styles.serviceList}>
          {prePostnatalServices.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.serviceHeader}>
                {index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 ? (
                  <button
                    type="button"
                    className={styles.serviceTitleButton}
                    onClick={() => {
                      if (index === 0) {
                        setIsEarlyPregnancyOpen((prev) => !prev);
                      }

                      if (index === 1) {
                        setIsPreventComplicationsOpen((prev) => !prev);
                      }

                      if (index === 2) {
                        setIsBreechPresentationOpen((prev) => !prev);
                      }

                      if (index === 3) {
                        setIsEasySmoothLaborOpen((prev) => !prev);
                      }

                      if (index === 4) {
                        setIsNursingIssuesOpen((prev) => !prev);
                      }

                      if (index === 5) {
                        setIsAfterDeliveryCareOpen((prev) => !prev);
                      }
                    }}
                    aria-expanded={
                      index === 0
                        ? isEarlyPregnancyOpen
                        : index === 1
                          ? isPreventComplicationsOpen
                          : index === 2
                            ? isBreechPresentationOpen
                            : index === 3
                              ? isEasySmoothLaborOpen
                              : index === 4
                                ? isNursingIssuesOpen
                                : isAfterDeliveryCareOpen
                    }
                    aria-label={
                      index === 0
                        ? toggleLabel
                        : index === 1
                          ? complicationsToggleLabel
                          : index === 2
                            ? breechToggleLabel
                            : index === 3
                              ? easySmoothLaborToggleLabel
                              : index === 4
                                ? nursingIssuesToggleLabel
                                : afterDeliveryCareToggleLabel
                    }
                  >
                    <h3 className="headingMedium">{service}</h3>
                    <span
                      className={`${styles.chevron} ${
                        (index === 0 && isEarlyPregnancyOpen) ||
                        (index === 1 && isPreventComplicationsOpen) ||
                        (index === 2 && isBreechPresentationOpen) ||
                        (index === 3 && isEasySmoothLaborOpen) ||
                        (index === 4 && isNursingIssuesOpen) ||
                        (index === 5 && isAfterDeliveryCareOpen)
                          ? styles.chevronOpen
                          : ""
                      }`}
                    />
                  </button>
                ) : (
                  <>
                    <h3 className="headingMedium">{service}</h3>
                    <span className={styles.chevron} />
                  </>
                )}
              </div>
              {index === 0 && (
                <div
                  className={`${styles.descriptionPanel} ${
                    isEarlyPregnancyOpen ? styles.panelOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    {earlyPregnancyParagraphs.map(
                      (paragraph: string, paragraphIndex: number) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ),
                    )}
                  </div>
                </div>
              )}
              {index === 1 && (
                <div
                  className={`${styles.descriptionPanel} ${
                    isPreventComplicationsOpen ? styles.panelOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    {preventComplicationsParagraphs.map(
                      (paragraph: string, paragraphIndex: number) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ),
                    )}
                  </div>
                </div>
              )}
              {index === 2 && (
                <div
                  className={`${styles.descriptionPanel} ${
                    isBreechPresentationOpen ? styles.panelOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    {breechPresentationParagraphs.map(
                      (paragraph: string, paragraphIndex: number) => (
                        <p key={paragraphIndex}>{renderBreechParagraph(paragraph)}</p>
                      ),
                    )}
                  </div>
                </div>
              )}
              {index === 3 && (
                <div
                  className={`${styles.descriptionPanel} ${
                    isEasySmoothLaborOpen ? styles.panelOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    {easySmoothLaborParagraphs.map(
                      (paragraph: string, paragraphIndex: number) => (
                        <p key={paragraphIndex}>
                          {renderEasyLaborParagraph(paragraph)}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              )}
              {index === 4 && (
                <div
                  className={`${styles.descriptionPanel} ${
                    isNursingIssuesOpen ? styles.panelOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    {nursingIssuesParagraphs.map(
                      (paragraph: string, paragraphIndex: number) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ),
                    )}
                  </div>
                </div>
              )}
              {index === 5 && (
                <div
                  className={`${styles.descriptionPanel} ${
                    isAfterDeliveryCareOpen ? styles.panelOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    {afterDeliveryCareParagraphs.map(
                      (paragraph: string, paragraphIndex: number) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.bookButtonWrapper}>
          <Button
            component={Link}
            to={getLocalizedPath("contact", language)}
            variant="contained"
            sx={{
              backgroundColor: "#A6463D",
              color: "#FFFFFF",
              textTransform: "none",
              borderRadius: "12px",
              padding: "10px 24px",
              width: { xs: "80%", sm: "200px" },
              fontSize: "1rem !important",
              "&:hover": { backgroundColor: "#8f3830" },
            }}
            className="fontMain"
          >
            {translations.app.Navigation.bookAppointment}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PrePostnatalCareSection;
