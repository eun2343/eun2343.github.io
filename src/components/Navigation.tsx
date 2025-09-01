import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { en } from "../translation/en";

const Navigation = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ height: 80, bgcolor: "#fff", padding: 2 }}>
        <img
          style={{ maxHeight: "100%", width: "auto", cursor: "pointer" }}
          src="src/assets/logo-normal.png "
          alt="Logo"
          onClick={() => (window.location.href = "/")}
        />
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            flex: 1,
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h5" sx={{ color: "black", cursor: "pointer" }}>
              home
            </Typography>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Typography variant="h5" sx={{ color: "black", cursor: "pointer" }}>
              {en.app.Navigation.menuItems[0]}
            </Typography>
          </Link>
          <Link to="/why-choi-tcm" style={{ textDecoration: "none" }}>
            <Typography variant="h5" sx={{ color: "black", cursor: "pointer" }}>
              {en.app.Navigation.menuItems[1]}
            </Typography>
          </Link>
          <Link to="/fee" style={{ textDecoration: "none" }}>
            <Typography variant="h5" sx={{ color: "black", cursor: "pointer" }}>
              {en.app.Navigation.menuItems[2]}
            </Typography>
          </Link>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: "black", cursor: "pointer", paddingRight: "20px" }}
        >
          {en.app.Navigation.language}
        </Typography>
        <Button variant="contained" color="primary">
          {en.app.Navigation.bookAppointment}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
