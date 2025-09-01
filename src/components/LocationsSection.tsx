import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import { zurichMapImage, luzernMapImage } from "./MapImages";
import { choiTCMLocations, openInGoogleMaps } from "../utils/mapsUtils";

const LocationsSection: React.FC = () => {
  const { translations } = useLanguage();

  // Using custom SVG map images for better visual representation
  const zurichStaticMap = zurichMapImage;
  const luzernStaticMap = luzernMapImage;

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
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#2c3e50",
          mb: 6,
        }}
      >
        {translations.app.LocationsSection.title}
      </Typography>

      <Grid container spacing={4}>
        {/* Zürich Location */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              },
            }}
            onClick={handleZurichMapClick}
          >
            <CardMedia
              component="img"
              height="300"
              image={zurichStaticMap}
              alt="Choi TCM Zürich Location Map"
              sx={{
                objectFit: "cover",
                "&:hover": {
                  opacity: 0.9,
                },
              }}
            />
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#2c3e50" }}
              >
                {translations.app.Footer.locations.zurich.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: "#7f8c8d",
                  fontWeight: 500,
                }}
              >
                {translations.app.Footer.locations.zurich.address}
              </Typography>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: "#2c3e50",
                    mb: 1,
                  }}
                >
                  {translations.app.LocationsSection.openingHours}:
                </Typography>
                {translations.app.Footer.locations.zurich.openingHours.map(
                  (hours, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        color: "#7f8c8d",
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
                  mt: 2,
                  display: "block",
                  color: "#95a5a6",
                  fontStyle: "italic",
                }}
              >
                {translations.app.LocationsSection.clickToOpenMaps}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Luzern Location */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              },
            }}
            onClick={handleLuzernMapClick}
          >
            <CardMedia
              component="img"
              height="300"
              image={luzernStaticMap}
              alt="Choi TCM Luzern Location Map"
              sx={{
                objectFit: "cover",
                "&:hover": {
                  opacity: 0.9,
                },
              }}
            />
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#2c3e50" }}
              >
                {translations.app.Footer.locations.luzern.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: "#7f8c8d",
                  fontWeight: 500,
                }}
              >
                {translations.app.Footer.locations.luzern.address}
              </Typography>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: "#2c3e50",
                    mb: 1,
                  }}
                >
                  {translations.app.LocationsSection.openingHours}:
                </Typography>
                {translations.app.Footer.locations.luzern.openingHours.map(
                  (hours, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        color: "#7f8c8d",
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
                  mt: 2,
                  display: "block",
                  color: "#95a5a6",
                  fontStyle: "italic",
                }}
              >
                {translations.app.LocationsSection.clickToOpenMaps}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LocationsSection;
