import { Container, Typography, Box } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import type { Reason } from "../translation/types";

const FertilitySpecialistSection = () => {
  const { translations } = useLanguage();

  return (
    <Container sx={{ marginTop: 12, marginBottom: 8, minHeight: "60vh" }}>
      {/* Hero Image */}
      {/*
      <Box
        sx={{
          width: "100%",
          marginBottom: 6,
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <img
          src="/images/akupunktur2.jpg"
          alt="Traditional Chinese Medicine"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      */}

      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          marginBottom: 3,
          fontWeight: 800,
          color: '#915446',
          fontFamily: "'Playfair Display', serif",
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.2rem' },
        }}
      >
        {translations.app.WhyChoiTCMPage.title}
      </Typography>

      <Box sx={{ maxWidth: "100%", marginTop: 8 }}>
        {translations.app.WhyChoiTCMPage.reasons.map(
          (reason: Reason, index: number) => {
            // Titles to change color for
            const highlightTitles = [
              "I'm a Fertility specialist",
              "You'll receive personalized treatment",
              "Evidence-based TCM treatments with a thorough understanding of reproductive health",
              "Compassionate support and respect",
              "Clinical expertise from advanced Korean practices"
            ];
            const isHighlighted = highlightTitles.includes(reason.title);
            return (
              <Box key={index} sx={{ marginBottom: 8 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: isHighlighted ? '#666' : '#7624f1',
                    marginBottom: 1.5,
                    textAlign: "left",
                    fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
                  }}
                >
                  {reason.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.6,
                    color: "#555",
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
                    textAlign: "left",
                  }}
                >
                  {reason.description
                    .split("|")
                    .map((line: string, lineIndex: number) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < reason.description.split("|").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                </Typography>
              </Box>
            );
          }
        )}
      </Box>
    </Container>
  );
};

export default FertilitySpecialistSection;
