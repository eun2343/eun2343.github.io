
import { Container, Grid } from "@mui/material";
import CardWithContent from "./cardWithContent";
import { useLanguage } from "../translation/useLanguage";
import styles from "./GynecologySection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const GynecologySection = () => {
  const { translations } = useLanguage();
  const gynoCardContent = translations.app.GynecologySection.content;

  return (
    <div className={styles.root}>
      <Container>
        <h2 className="headingLarge textCenter mb-8">{translations.app.GynecologySection.title}</h2>
        <Grid container spacing={4} className="mt-4">
          {gynoCardContent.map((item, index) => (
            <CardWithContent key={index} index={index} item={item} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default GynecologySection;
