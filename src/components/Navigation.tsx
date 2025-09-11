import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../translation/useLanguage";
import { useState } from "react";

const Navigation = () => {
  const { translations, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { path: "/", label: "home" },
    { path: "/about", label: translations.app.Navigation.menuItems[0] },
    { path: "/why-choi-tcm", label: translations.app.Navigation.menuItems[1] },
    { path: "/fee", label: translations.app.Navigation.menuItems[2] },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <Link
              to={item.path}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  textAlign: "center",
                  "& .MuiTypography-root": {
                    color: "black",
                    fontSize: "1.1rem",
                    py: 1,
                  },
                }}
              />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemText
            primary={translations.app.Navigation.language}
            onClick={handleLanguageToggle}
            sx={{
              textAlign: "center",
              cursor: "pointer",
              "& .MuiTypography-root": {
                color: "black",
                fontSize: "1.1rem",
                py: 1,
              },
            }}
          />
        </ListItem>
        <ListItem disablePadding sx={{ justifyContent: "center", pt: 2 }}>
          <Button variant="contained" color="primary" sx={{ mx: "auto" }}>
            {translations.app.Navigation.bookAppointment}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{ height: 80, bgcolor: "#fff", padding: { xs: 1, md: 2 } }}
        >
          <img
            style={{ maxHeight: "100%", width: "auto", cursor: "pointer" }}
            src="src/assets/logo-normal.png "
            alt="Logo"
            onClick={() => (window.location.href = "/")}
          />

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "40px",
              flex: 1,
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{ color: "black", cursor: "pointer" }}
              >
                home
              </Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{ color: "black", cursor: "pointer" }}
              >
                {translations.app.Navigation.menuItems[0]}
              </Typography>
            </Link>
            <Link to="/why-choi-tcm" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{ color: "black", cursor: "pointer" }}
              >
                {translations.app.Navigation.menuItems[1]}
              </Typography>
            </Link>
            <Link to="/fee" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{ color: "black", cursor: "pointer" }}
              >
                {translations.app.Navigation.menuItems[2]}
              </Typography>
            </Link>
          </Box>

          {/* Desktop Language and Book Button */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "black", cursor: "pointer", paddingRight: "20px" }}
              onClick={handleLanguageToggle}
            >
              {translations.app.Navigation.language}
            </Typography>
            <Button variant="contained" color="primary">
              {translations.app.Navigation.bookAppointment}
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "black" }}
            >
              ☰
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
