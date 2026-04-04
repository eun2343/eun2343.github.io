
import { Container, Box, List, ListItem } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import styles from "./AboutSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const AboutSection = () => {
  const { translations } = useLanguage();

  return (
    <div className={styles.root}>
      <Container className="sectionContainer" sx={{ marginTop: { xs: 4, md: 12 }, marginBottom: 8, minHeight: "60vh", px: { xs: 2, md: 3 } }}>
        {/* Two-column layout for profile section */}
        <Box className={styles.columns}>
          {/* Left column - Profile Image */}
          <Box className={styles.left}>
            <img
              className={styles.profileImage}
              src={translations.app.AboutPage.profileImage}
              alt="Dr. Eunkyeong Choi"
            />
          </Box>
          {/* Right column - Qualifications */}
          <Box className={styles.right}>
            <span className="headingLarge mb-8">Dr. Eunkyeong Choi</span>
            <span className={`headingMedium mb-2 ${styles.sectionHeading}`}>Qualifications</span>
            <List className={styles.qualificationList}>
              {translations.app.AboutPage.qualifications.map((qualification: string, index: number) => (
                <ListItem key={index} className={styles.qualificationItem}>
                  <span>{`• ${qualification}`}</span>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        {/* Full-width section for experience */}
        <Box className={styles.experienceBlock}>
          <span className={`headingMedium mb-2 ${styles.sectionHeading}`}>Experiences</span>
          <List className={styles.experienceList}>
            {translations.app.AboutPage.experience.map((experienceItem: string, index: number) => (
              <ListItem key={index} className={styles.experienceItem}>
                <span>{`• ${experienceItem}`}</span>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </div>
  );
};

export default AboutSection;
