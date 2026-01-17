import { Container, Typography, Box } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import type { Reason } from "../translation/types";

const FertilitySpecialistSection = () => {
  const { translations } = useLanguage();

  return (
    <Container className="fertility-specialist-section-root" sx={{ marginTop: 12, marginBottom: 8, minHeight: "60vh" }}>
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
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          marginBottom: 10,
          fontWeight: 700,
          color: '#915446',
          fontFamily: "'Playfair Display', serif",
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.3rem' },
          letterSpacing: 0.2,
        }}
      >
        {translations.app.WhyChoiTCMPage.title}
      </Typography>

      <Box sx={{ maxWidth: "100%", marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {translations.app.WhyChoiTCMPage.reasons.map(
            (reason: Reason, index: number) => {
            // Titles to change color for
            return (
              <Box key={index} sx={{ marginBottom: 8, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 3, justifyContent: 'center' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 80,
                    minHeight: 80,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: '#f2ebe6',
                    color: '#915446',
                    fontWeight: 900,
                    fontSize: '2.6rem',
                    marginRight: 14,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </span>
                  <Box sx={{ flex: 1, maxWidth: 800 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#915446',
                      marginBottom: 2,
                      textAlign: "left",
                      fontSize: { xs: '1.7rem', sm: '1.7rem', md: '2rem' },
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {reason.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6,
                      color: '#1a1a1a',
                      fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
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
              </Box>
            );
          }
        )}
      </Box>
    </Container>
  );
};

export default FertilitySpecialistSection;
