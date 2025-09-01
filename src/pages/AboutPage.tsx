import { Container, Typography, Box } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AboutPage = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Navigation />
      <Container sx={{ marginTop: 8, marginBottom: 8, minHeight: "60vh" }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ marginBottom: 6, fontWeight: 700 }}
        >
          {translations.app.AboutPage.title}
        </Typography>

        <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
          {translations.app.AboutPage.content.map(
            (paragraph: string, index: number) => (
              <Typography
                key={index}
                variant="h6"
                paragraph
                sx={{
                  lineHeight: 1.8,
                  marginBottom: 3,
                  color: "#555",
                }}
              >
                {paragraph}
              </Typography>
            )
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
