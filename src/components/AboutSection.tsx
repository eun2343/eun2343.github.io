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
    <div className="about-section-root about-section" style={{ backgroundColor: "#F2EBE6", padding: "20px 0" }}>
      <Container
        className="about-container"
        sx={{
          marginTop: { xs: 4, md: 12 },
          marginBottom: 8,
          minHeight: "60vh",
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Two-column layout for profile section */}
        <Box
          className="about-columns"
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
            className="about-left"
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
              className="about-profile-image"
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
            className="about-right"
            sx={{
              flex: { md: "0 0 70%" },
              width: { xs: "100%", md: "70%" },
              paddingLeft: { md: 3 },
            }}
          >
            <span
              className="responsive-card-title about-title"
              style={{ display: 'block', marginBottom: 32, fontSize: '2.2rem' }}
            >
              Eunkyeong Choi
            </span>
            <Typography
              className="about-qualifications"
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
            <List className="about-qualification-list" sx={{ padding: 0 }}>
              {translations.app.AboutPage.qualifications.map(
                (qualification: string, index: number) => (
                  <ListItem key={index} className="about-qualification-item" sx={{ paddingX: 0, paddingY: 1 }}>
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
        <Box className="about-experiences" sx={{ maxWidth: "100%", margin: "0 auto" }}>
          <Typography
            className="about-experiences-title"
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
          <List className="about-experience-list" sx={{ padding: 0 }}>
            {translations.app.AboutPage.experience.map(
              (experienceItem: string, index: number) => (
                <ListItem key={index} className="about-experience-item" sx={{ paddingX: 0, paddingY: 1.5 }}>
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
