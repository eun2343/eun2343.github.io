import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../translation/useLanguage";

const HeroSection = () => {
  const { translations, language } = useLanguage();

  return (
    <div
      className="hero-section-root hero-section"
      style={{
        position: "relative",
        backgroundImage: "url('/images/herosection.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.6)", // 60% transparent white overlay
          zIndex: 1,
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          paddingY: { xs: 2, md: 4 },
          alignContent: "center",
          marginBottom: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 6,
        }}
      >
        <Typography
          fontWeight={700}
          paddingBottom={{ xs: 2, md: 4 }}
          variant="h2"
          gutterBottom
          align="center"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            lineHeight: 1.4,
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

        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            lineHeight={2}
            paddingBottom={{ xs: 2, md: 4 }}
            variant="h4"
            gutterBottom
            align="left"
            sx={{
              fontFamily: "'lato', serif",
              fontSize: { xs: "1.15rem", sm: "1.35rem", md: "1.7rem" },
              textAlign: "left",
              lineHeight: 2,
            }}
          >
            {translations.app.HeroSection.subtitle
              .split(" | ")
              .map((part: string, index: number, array: string[]) => (
                <span key={index} className="textDark fontMain">
                  &#8226; {part}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
          </Typography>
        </Box>
        <Button
          component={Link}
          to={`/${language}/contact`}
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#A76456",
            color: "#FFFFFF",
            textTransform: "none",
            borderRadius: "24px",
            padding: "10px 24px",
            width: { xs: "80%", sm: "200px" },
            margin: "0 auto",
            marginTop: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#A76456",
              color: "#FFFFFF",
            },
          }}
          className="fontMain"
        >
          {translations.app.HeroSection.bookAppointment}
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
