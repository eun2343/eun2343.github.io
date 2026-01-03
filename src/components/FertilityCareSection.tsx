import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { useLanguage } from "../translation/useLanguage";

const FertilityCareSection = () => {
  const { translations } = useLanguage();
  const fertilityServices = translations.app.FertilityCareSection.services;

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "300px",
        marginTop: "auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container>
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
            src="/images/fertility.jpg"
            alt="Fertility Care Treatment"
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
          variant="h4"
          padding={4}
          gutterBottom
          align="center"
          sx={{ marginBottom: 4 }}
        >
          {translations.app.FertilityCareSection.title}
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          {fertilityServices.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{service}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default FertilityCareSection;
