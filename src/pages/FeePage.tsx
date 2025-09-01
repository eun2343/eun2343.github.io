import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";
import { en } from "../translation/en";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FeePage = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ marginTop: 8, marginBottom: 8, minHeight: "60vh" }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ marginBottom: 2, fontWeight: 700 }}
        >
          {en.app.FeePage.title}
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{ marginBottom: 6, color: "#666" }}
        >
          {en.app.FeePage.subtitle}
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          {en.app.FeePage.services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Card sx={{ height: "100%", padding: 3, textAlign: "center" }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 700, color: "#1976d2" }}
                  >
                    {service.price}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#888", marginBottom: 2 }}
                  >
                    {service.duration}
                  </Typography>
                  <Divider sx={{ marginY: 2 }} />
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.6, color: "#555" }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            marginTop: 6,
            padding: 3,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{ fontStyle: "italic", color: "#666" }}
          >
            {en.app.FeePage.note}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default FeePage;
