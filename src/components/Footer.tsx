import { Container, Typography, Link } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer
      style={{
        minHeight: "300px",
        marginTop: "auto",
        backgroundColor: "#96695e",
        padding: "20px 0",
        color: "white",
      }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
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
