import { Container, Typography, Link, Grid, Box } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer
      style={{
        minHeight: "300px",
        marginTop: "auto",
        backgroundColor: "#96695e",
        padding: "40px 0 20px 0",
        color: "white",
      }}
    >
      <Container>
        {/* Location Information */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Luzern Location */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {translations.app.Footer.locations.luzern.title}
              </Typography>
              {translations.app.Footer.locations.luzern.openingHours.map(
                (hours, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{ mb: 0.5, color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    {hours}
                  </Typography>
                )
              )}
            </Box>
          </Grid>

          {/* Zürich Location */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {translations.app.Footer.locations.zurich.title}
              </Typography>
              {translations.app.Footer.locations.zurich.openingHours.map(
                (hours, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{ mb: 0.5, color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    {hours}
                  </Typography>
                )
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          color="rgba(255, 255, 255, 0.7)"
          align="center"
        >
          {translations.app.Footer.copyright}
          <Link color="inherit" href={translations.app.Footer.companyLink}>
            {translations.app.Footer.companyName}
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
