import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import type { Reason } from "../translation/types";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const WhyChoiTCMPage = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Navigation />
      <Container sx={{ marginTop: 8, marginBottom: 8, minHeight: "60vh" }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ marginBottom: 6, fontWeight: 700 }}
        >
          {translations.app.WhyChoiTCMPage.title}
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          {translations.app.WhyChoiTCMPage.reasons.map(
            (reason: Reason, index: number) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card sx={{ height: "100%", padding: 2 }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 600, color: "#1976d2" }}
                    >
                      {reason.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.6, color: "#555" }}
                    >
                      {reason.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default WhyChoiTCMPage;
