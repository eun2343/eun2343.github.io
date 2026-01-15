import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../translation/useLanguage";

const HeroSection = () => {
  const { translations, language } = useLanguage();

  return (
    <div className="hero-section">
      <Container
        sx={{
          paddingY: { xs: 6, md: 11 },
          alignContent: "center",
          marginBottom: { xs: 2, md: 4 },
        }}
      >
        <Typography
          fontWeight={700}
          paddingBottom={{ xs: 2, md: 4 }}
          variant="h2"
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" },
          }}
        >
          {translations.app.HeroSection.title
            .split(" | ")
            .map((part: string, index: number, array: string[]) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && <br />}
              </span>
            ))}
        </Typography>

        <Typography
          lineHeight={1.5}
          paddingBottom={{ xs: 2, md: 4 }}
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.125rem" },
          }}
        >
          {translations.app.HeroSection.subtitle
            .split(" | ")
            .map((part: string, index: number, array: string[]) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && <br />}
              </span>
            ))}
        </Typography>
        <Button
          component={Link}
          to={`/${language}/contact`}
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#96695e",
            textTransform: "none",
            fontFamily: "'HK Grotesk', system-ui, Avenir, Helvetica, Arial, sans-serif",
            borderRadius: "12px",
            padding: "12px 32px",
            whiteSpace: "nowrap",
            textAlign: "center",
            width: { xs: "80%", sm: "200px" },
            margin: "0 auto",
            display: "block",
            fontSize: { xs: "0.875rem", md: "1rem" },
            "&:hover": {
              backgroundColor: "#96695e",
              color: "white",
            },
          }}
        >
          {translations.app.HeroSection.bookAppointment}
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
