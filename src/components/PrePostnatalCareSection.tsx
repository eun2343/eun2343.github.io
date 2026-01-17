
import { Container, Grid } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import styles from "./PrePostnatalCareSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const PrePostnatalCareSection = () => {
  const { translations } = useLanguage();
  const prePostnatalServices =
    translations.app.PrePostnatalCareSection.services;

  return (
    <div className={styles.root}>
      <Container>
        <h2 className="headingLarge textCenter mb-8">{translations.app.PrePostnatalCareSection.title}</h2>
        <Grid container spacing={2} className="mt-4">
          {prePostnatalServices.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <div className="card mb-4 textCenter">
                <h3 className="headingMedium mb-4">{service}</h3>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PrePostnatalCareSection;
