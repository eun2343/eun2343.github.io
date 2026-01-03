import {
  Container,
  Typography,
  Link,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import { choiTCMLocations, openInGoogleMaps } from "../utils/mapsUtils";

const Footer = () => {
  const { translations } = useLanguage();

  // Get location data
  const zurichLocation = choiTCMLocations[0]; // Zürich
  const luzernLocation = choiTCMLocations[1]; // Luzern

  const handleZurichMapClick = () => {
    openInGoogleMaps(zurichLocation);
  };

  const handleLuzernMapClick = () => {
    openInGoogleMaps(luzernLocation);
  };

  return (
    <footer
      style={{
        minHeight: "400px",
        marginTop: "auto",
        backgroundColor: "#96695e",
        padding: "60px 0 20px 0",
        color: "white",
      }}
    >
      <Container>
        {/* Our Locations Section */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "white",
            mb: 6,
          }}
        >
          {translations.app.LocationsSection.title}
        </Typography>

        {/* Location Information with Maps */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Luzern Location */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                cursor: "pointer",
                transition:
                  "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-2px)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                },
              }}
              onClick={handleLuzernMapClick}
            >
              <CardMedia
                component="img"
                height="200"
                image="/images/eich.jpg"
                alt="Choi TCM Luzern Location Map"
                sx={{
                  objectFit: "cover",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {translations.app.Footer.locations.luzern.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: 500,
                  }}
                >
                  {translations.app.Footer.locations.luzern.address}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "white", mb: 1 }}
                  >
                    {translations.app.LocationsSection.openingHours}:
                  </Typography>
                  {translations.app.Footer.locations.luzern.openingHours.map(
                    (hours, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          lineHeight: 1.4,
                        }}
                      >
                        {hours}
                      </Typography>
                    )
                  )}
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontStyle: "italic",
                  }}
                >
                  {translations.app.LocationsSection.clickToOpenMaps}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Zürich Location */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                cursor: "pointer",
                transition:
                  "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-2px)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                },
              }}
              onClick={handleZurichMapClick}
            >
              <CardMedia
                component="img"
                height="200"
                image="/images/kasahara.jpg"
                alt="Choi TCM Zürich Location Map"
                sx={{
                  objectFit: "cover",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {translations.app.Footer.locations.zurich.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: 500,
                  }}
                >
                  {translations.app.Footer.locations.zurich.address}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "white", mb: 1 }}
                  >
                    {translations.app.LocationsSection.openingHours}:
                  </Typography>
                  {translations.app.Footer.locations.zurich.openingHours.map(
                    (hours, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          lineHeight: 1.4,
                        }}
                      >
                        {hours}
                      </Typography>
                    )
                  )}
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontStyle: "italic",
                  }}
                >
                  {translations.app.LocationsSection.clickToOpenMaps}
                </Typography>
              </CardContent>
            </Card>
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
