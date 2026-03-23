import { Container } from "@mui/material";
import styles from "./DoesTCMWorkSection.module.css";
import "../styles/utilities.css";
import { useLanguage } from "../translation/useLanguage";

const studyLinks = [
  "https://www.rbmojournal.com/article/S1472-6483(15)00092-9/pdf",
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC8158119/",
  "https://pubmed.ncbi.nlm.nih.gov/10702864/",
];

const DoesTCMWorkSection = () => {
  const { translations } = useLanguage();
  const t = translations.app.DoesTCMWorkSection;

  return (
    <section className={styles.root}>
      <Container>
        <h2 className="headingLarge textCenter mb-4">{t.title}</h2>
        <p className={styles.description}>{t.description1}<br />{t.description2}</p>
        <ul className={styles.list}>
          {t.studies.map((label: string, i: number) => (
            <li key={i}>
              <a href={studyLinks[i]} target="_blank" rel="noopener noreferrer">
                <span className={styles.linkText}>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default DoesTCMWorkSection;
