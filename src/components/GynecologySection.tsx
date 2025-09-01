import { Container, Typography, Grid } from "@mui/material";
import CardWithContent from "./cardWithContent";
import { useLanguage } from "../translation/useLanguage";

const GynecologySection = () => {
  const { translations } = useLanguage();
  const gynoCardContent = translations.app.GynecologySection.content;

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "300px",
        marginTop: "auto",
        backgroundColor: "#fff",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          padding={4}
          gutterBottom
          align="center"
          sx={{ marginBottom: 4 }}
        >
          {translations.app.GynecologySection.title}
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          {gynoCardContent.map((item, index) => (
            <CardWithContent key={index} index={index} item={item} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default GynecologySection;
