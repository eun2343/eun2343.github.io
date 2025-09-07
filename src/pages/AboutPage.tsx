import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AboutPage = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Navigation />
      <Container sx={{ marginTop: 12, marginBottom: 8, minHeight: "60vh" }}>
        {/* Two-column layout for profile section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
            marginBottom: 8,
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* Left column - Profile Image */}
          <Box
            marginTop={16}
            sx={{
              flex: { md: "0 0 30%" },
              width: { xs: "100%", md: "30%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={translations.app.AboutPage.profileImage}
              alt="Dr. Eunkyeong Choi"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Right column - Qualifications */}
          <Box
            sx={{
              flex: { md: "0 0 70%" },
              width: { xs: "100%", md: "70%" },
              paddingLeft: { md: 3 },
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ marginBottom: 3, fontWeight: 600, color: "#333" }}
            >
              Choi TCM
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ marginBottom: 3, fontWeight: 600, color: "#333" }}
            >
              Eunkyeong Choi
            </Typography>
            <List sx={{ padding: 0 }}>
              {translations.app.AboutPage.qualifications.map(
                (qualification: string, index: number) => (
                  <ListItem key={index} sx={{ paddingX: 0, paddingY: 1 }}>
                    <ListItemText
                      primary={`• ${qualification}`}
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "1.5rem",
                          lineHeight: 1.2,
                          color: "#555",
                        },
                      }}
                    />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Box>

        {/* Full-width section for experience */}
        <Box sx={{ maxWidth: "100%", margin: "0 auto" }}>
          <List sx={{ padding: 0 }}>
            {translations.app.AboutPage.experience.map(
              (experienceItem: string, index: number) => (
                <ListItem key={index} sx={{ paddingX: 0, paddingY: 1.5 }}>
                  <ListItemText
                    primary={`• ${experienceItem}`}
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1.6rem",
                        lineHeight: 1.2,
                        color: "#555",
                      },
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
