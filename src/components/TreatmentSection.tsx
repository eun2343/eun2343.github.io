import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";

const TreatmentSection = () => {
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
          src="/images/akupunktur1.jpg"
          alt="Acupuncture Treatment"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ marginBottom: 6, fontWeight: 700 }}
      >
        {translations.app.TreatmentSection.title}
      </Typography>

      <Box sx={{ maxWidth: "100%", marginTop: 8 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ marginBottom: 4, textAlign: "center", color: "#666" }}
        >
          {translations.app.TreatmentSection.subtitle}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* Acupuncture */}
          <Card sx={{ boxShadow: 3 }}>
            <CardContent sx={{ padding: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: "#1976d2" }}
              >
                {translations.app.TreatmentSection.treatments.acupuncture.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, color: "#555" }}
              >
                {
                  translations.app.TreatmentSection.treatments.acupuncture
                    .description
                }
              </Typography>
            </CardContent>
          </Card>

          {/* Herbal Medicine */}
          <Card sx={{ boxShadow: 3 }}>
            <CardContent sx={{ padding: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: "#1976d2" }}
              >
                {
                  translations.app.TreatmentSection.treatments.herbalMedicine
                    .title
                }
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, color: "#555" }}
              >
                {
                  translations.app.TreatmentSection.treatments.herbalMedicine
                    .description
                }
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default TreatmentSection;
