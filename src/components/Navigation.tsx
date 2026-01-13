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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { path: "/", label: "home" },
    { path: "/about", label: translations.app.Navigation.menuItems[0] },
    { path: "/treatment", label: translations.app.Navigation.menuItems[1] },
  ];

  const renderDesktopNavLink = (item: { path: string; label: string }) => (
    <Link
      className="navlink"
      key={item.path}
      to={item.path}
      style={{ textDecoration: "none" }}
    >
      <Typography variant="h5" sx={{ color: "black", cursor: "pointer" }}>
        {item.label}
      </Typography>
    </Link>
  );

  const renderMobileNavLink = (item: { path: string; label: string }) => (
    <ListItem key={item.path} disablePadding>
      <Link to={item.path} style={{ textDecoration: "none", width: "100%" }}>
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
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 2 }}>
      <List>
        {menuItems.map(renderMobileNavLink)}
        <ListItem disablePadding>
          <Box sx={{ textAlign: "center", width: "100%", py: 1 }}>
            <Typography
              component="span"
              sx={{
                color: language === "en" ? "black" : "#666",
                cursor: language === "en" ? "default" : "pointer",
                fontSize: "1.1rem",
              }}
              onClick={language === "en" ? undefined : () => setLanguage("en")}
            >
              en
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "black",
                fontSize: "1.1rem",
                mx: 1,
              }}
            >
              |
            </Typography>
            <Typography
              component="span"
              sx={{
                color: language === "de" ? "black" : "#666",
                cursor: language === "de" ? "default" : "pointer",
                fontSize: "1.1rem",
              }}
              onClick={language === "de" ? undefined : () => setLanguage("de")}
            >
              de
            </Typography>
          </Box>
        </ListItem>
        <ListItem disablePadding sx={{ justifyContent: "center", pt: 2 }}>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{
              mx: "auto",
              "&:hover": {
                color: "white",
              },
            }}
          >
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
            src="/images/logo-normal.png "
            alt="Logo"
            onClick={() => (window.location.href = "/")}
          />

          {/* Desktop Navigation - Now empty center space */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flex: 1,
            }}
          >
            {/* Empty space for logo on left, navigation on right */}
          </Box>

          {/* Desktop Navigation, Language and Book Button - All on the right */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "30px",
            }}
          >
            {/* Navigation Links */}
            {menuItems.map(renderDesktopNavLink)}

            {/* Language Toggle */}
            <Box sx={{ paddingLeft: "20px" }}>
              <Typography
                component="span"
                variant="h6"
                sx={{
                  color: language === "en" ? "black" : "#666",
                  cursor: language === "en" ? "default" : "pointer",
                }}
                onClick={
                  language === "en" ? undefined : () => setLanguage("en")
                }
              >
                en
              </Typography>
              <Typography
                component="span"
                variant="h6"
                sx={{
                  color: "black",
                  mx: 1,
                }}
              >
                |
              </Typography>
              <Typography
                component="span"
                variant="h6"
                sx={{
                  color: language === "de" ? "black" : "#666",
                  cursor: language === "de" ? "default" : "pointer",
                }}
                onClick={
                  language === "de" ? undefined : () => setLanguage("de")
                }
              >
                de
              </Typography>
            </Box>

            {/* Book Appointment Button */}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{
                "&:hover": {
                  color: "white",
                },
              }}
            >
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
