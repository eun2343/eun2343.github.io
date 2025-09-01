import { Container, Typography, Button } from "@mui/material";
import { en } from "../translation/en";

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ padding: "20px 0" }}>
      <Container
        sx={{ marginTop: 12, alignContent: "center", marginBottom: 4 }}
      >
        <Typography
          fontWeight={700}
          paddingBottom={4}
          variant="h2"
          gutterBottom
          align="center"
        >
          {en.app.HeroSection.title.split(" | ").map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && <br />}
            </span>
          ))}
        </Typography>

        <Typography
          lineHeight={1.5}
          paddingBottom={4}
          variant="h4"
          gutterBottom
          align="center"
        >
          {en.app.HeroSection.subtitle
            .split(" | ")
            .map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && <br />}
              </span>
            ))}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "200px", margin: "0 auto", display: "block" }}
        >
          {en.app.HeroSection.bookAppointment}
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
