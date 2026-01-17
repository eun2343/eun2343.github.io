import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useLanguage } from "../translation/useLanguage";

const AboutSection = () => {
  const { translations } = useLanguage();

  return (
    <div style={{ backgroundColor: "#F2EBE6", padding: "20px 0" }}>
      <Container
        sx={{
          marginTop: { xs: 4, md: 12 },
          marginBottom: 8,
          minHeight: "60vh",
          px: { xs: 2, md: 3 },
        }}
      >
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
            marginTop={{ xs: 4, md: 16 }}
            sx={{
              flex: { md: "0 0 30%" },
              width: { xs: "50%", md: "30%" },
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              marginBottom: { xs: 4, md: 0 },
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
              variant="h3"
              gutterBottom
              sx={{
                marginBottom: 8,
                fontWeight: 600,
                fontSize: { xs: "1.5rem", md: "3rem" },
                fontFamily: "'Playfair Display', serif",
                color: '#1a1a1a',
              }}
            >
              Eunkyeong Choi
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                color: '#915446',
                fontFamily: "'Playfair Display', serif",
                marginBottom: 2,
              }}
            >
              Qualifications
            </Typography>
            <List sx={{ padding: 0 }}>
              {translations.app.AboutPage.qualifications.map(
                (qualification: string, index: number) => (
                  <ListItem key={index} sx={{ paddingX: 0, paddingY: 1 }}>
                    <ListItemText
                      primary={`• ${qualification}`}
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "1.3rem",
                          lineHeight: 1.1,
                          color: '#1a1a1a',
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
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              color: '#915446',
              fontFamily: "'Playfair Display', serif",
              marginBottom: 2,
            }}
          >
            Experiences
          </Typography>
          <List sx={{ padding: 0 }}>
            {translations.app.AboutPage.experience.map(
              (experienceItem: string, index: number) => (
                <ListItem key={index} sx={{ paddingX: 0, paddingY: 1.5 }}>
                  <ListItemText
                    primary={`• ${experienceItem}`}
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1.3rem",
                        lineHeight: 1.1,
                        color: '#1a1a1a',
                      },
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Container>
    </div>
  );
};

export default AboutSection;
