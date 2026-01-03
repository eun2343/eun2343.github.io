import { Container, Typography, Box } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import type { Reason } from "../translation/types";

const FertilitySpecialistSection = () => {
  const { translations } = useLanguage();

  return (
    <Container sx={{ marginTop: 12, marginBottom: 8, minHeight: "60vh" }}>
      {/* Hero Image */}
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
          src="/images/akupunktur2.png"
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

      {/* <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ marginBottom: 6, fontWeight: 700 }}
      >
        {translations.app.WhyChoiTCMPage.title}
      </Typography> */}

      <Box sx={{ maxWidth: "100%", marginTop: 8 }}>
        {translations.app.WhyChoiTCMPage.reasons.map(
          (reason: Reason, index: number) => (
            <Box key={index} sx={{ marginBottom: 8 }}>
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
                {reason.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  color: "#555",
                  fontSize: "1.6rem",
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
          )
        )}
      </Box>
    </Container>
  );
};

export default FertilitySpecialistSection;
