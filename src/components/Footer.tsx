
import { Container, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import { choiTCMLocations, openInGoogleMaps } from "../utils/mapsUtils";
import styles from "./Footer.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

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
    <footer className={styles.root}>
      <Container>
        {/* Our Locations Section */}
        <h2 className="headingLarge textCenter mb-8">{translations.app.LocationsSection.title}</h2>
        {/* Location Information with Maps */}
        <Grid container spacing={4} className={styles.locations}>
          {/* Luzern Location */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className={styles.locationCard} onClick={handleLuzernMapClick}>
              <CardMedia
                component="img"
                height="200"
                image="/images/eich.jpg"
                alt="Choi TCM Luzern Location Map"
                className={styles.locationImage}
              />
              <CardContent>
                <h3 className="headingMedium mb-4 textLight">{translations.app.Footer.locations.luzern.title}</h3>
                <div className="mb-4 textLight fontMedium">
                  {translations.app.Footer.locations.luzern.address}
                </div>
                <div className="mb-4 textLight">
                  <strong>{translations.app.LocationsSection.openingHours}:</strong>
                  <div>
                    {translations.app.Footer.locations.luzern.openingHours.map((hours, index) => (
                      <div key={index} className="textLight" style={{ lineHeight: 1.4 }}>{hours}</div>
                    ))}
                  </div>
                </div>
                <div className="textMuted" style={{ fontStyle: "italic" }}>{translations.app.LocationsSection.clickToOpenMaps}</div>
              </CardContent>
            </Card>
          </Grid>
          {/* Zürich Location */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className={styles.locationCard} onClick={handleZurichMapClick}>
              <CardMedia
                component="img"
                height="200"
                image="/images/kasahara.jpg"
                alt="Choi TCM Zürich Location Map"
                className={styles.locationImage}
              />
              <CardContent>
                <h3 className="headingMedium mb-4">{translations.app.Footer.locations.zurich.title}</h3>
                <div className="mb-4 textLight fontMedium">
                  {translations.app.Footer.locations.zurich.address}
                </div>
                <div className="mb-4">
                  <strong>{translations.app.LocationsSection.openingHours}:</strong>
                  <div>
                    {translations.app.Footer.locations.zurich.openingHours.map((hours, index) => (
                      <div key={index} className="textLight" style={{ lineHeight: 1.4 }}>{hours}</div>
                    ))}
                  </div>
                </div>
                <div className="textMuted" style={{ fontStyle: "italic" }}>{translations.app.LocationsSection.clickToOpenMaps}</div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Copyright */}
        <div className="textCenter textMuted mt-4 textLight">
          {translations.app.Footer.copyright}
          <a href={translations.app.Footer.companyLink} className="textLight">
            {translations.app.Footer.companyName}
          </a>{" "}
          {new Date().getFullYear()}
          {"."}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
