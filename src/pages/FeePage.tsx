import { Container, Typography, Box } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import type { Service } from "../translation/types";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FeePage = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Navigation />
      <Container
        sx={{
          marginTop: { xs: 4, md: 8 },
          marginBottom: 8,
          minHeight: "60vh",
          px: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h2"
          align="left"
          gutterBottom
          sx={{ marginBottom: 2, fontWeight: 700 }}
        >
          {translations.app.FeePage.title}
        </Typography>

        <Typography
          variant="h5"
          align="left"
          sx={{ marginBottom: 6, color: "#666", lineHeight: 1.6 }}
        >
          {translations.app.FeePage.subtitle
            .split("|")
            .map((line: string, lineIndex: number) => (
              <span key={lineIndex}>
                {line}
                {lineIndex <
                  translations.app.FeePage.subtitle.split("|").length - 1 && (
                  <br />
                )}
              </span>
            ))}
        </Typography>

        <Box sx={{ maxWidth: "100%", marginTop: 4 }}>
          {translations.app.FeePage.services.map(
            (service: Service, index: number) => (
              <Box key={index} sx={{ marginBottom: 5 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: "#1976d2",
                    marginBottom: 2,
                    textAlign: "left",
                  }}
                >
                  {service.name}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#1976d2",
                    marginBottom: 1,
                    textAlign: "left",
                  }}
                >
                  {service.price}
                </Typography>
                {service.duration && (
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#888",
                      marginBottom: 2,
                      textAlign: "left",
                      fontSize: "1.1rem",
                    }}
                  >
                    {service.duration}
                  </Typography>
                )}
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: "#555",
                    fontSize: "1.1rem",
                    textAlign: "left",
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            )
          )}
        </Box>

        <Box sx={{ marginTop: 6, marginBottom: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: "#1976d2",
              marginBottom: 2,
              textAlign: "left",
            }}
          >
            {translations.app.FeePage.cancellationPolicy.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "#555",
              fontSize: "1.1rem",
              textAlign: "left",
            }}
          >
            {translations.app.FeePage.cancellationPolicy.description}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default FeePage;
