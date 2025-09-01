import { Container, Typography, Link } from "@mui/material";
import { en } from "../translation/en";

const Footer = () => {
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
          {en.app.Footer.copyright}
          <Link color="inherit" href={en.app.Footer.companyLink}>
            {en.app.Footer.companyName}
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
