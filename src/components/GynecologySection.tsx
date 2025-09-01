import { Container, Typography, Grid } from "@mui/material";
import CardWithContent from "./cardWithContent";
import { en } from "../translation/en";

const GynecologySection = () => {
  const gynoCardContent = en.app.GynecologySection.content;

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
          {en.app.GynecologySection.title}
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
