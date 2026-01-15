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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../translation/useLanguage";
import { useState, useEffect } from "react";

const Navigation = () => {
  const { translations, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLang = (target: "en" | "de") => {
    // strip existing lang prefix (if any) and preserve the rest
    const stripped = location.pathname.replace(/^\/(en|de)/, "") || "/";
    const newPath = `/${target}${stripped}${location.search}${location.hash}`;
    navigate(newPath);
    setLanguage(target);
  };

  const menuItems = [
    { path: `/${language}/`, label: "Home" },
    { path: `/${language}/about`, label: translations.app.Navigation.menuItems[0] },
    { path: `/${language}/treatment`, label: translations.app.Navigation.menuItems[1] },
  ];

  const renderDesktopNavLink = (item: { path: string; label: string }) => (
    <Link
      className="navlink"
      key={item.path}
      to={item.path}
      style={{ textDecoration: "none" }}
    >
      <Typography variant="h5" sx={{ color: "black", cursor: "pointer", fontSize: "1.15rem" }}>
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
              fontSize: "1.05rem",
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
          <Box className="language-toggle" sx={{ textAlign: "center", width: "100%", py: 1 }}>
            <Typography
              component="span"
              sx={{
                color: language === "en" ? "black" : "#666",
                cursor: language === "en" ? "default" : "pointer",
                fontSize: "0.85rem",
              }}
              onClick={language === "en" ? undefined : () => changeLang("en")}
            >
              en
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "black",
                fontSize: "0.85rem",
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
                fontSize: "0.85rem",
              }}
              onClick={language === "de" ? undefined : () => changeLang("de")}
            >
              de
            </Typography>
          </Box>
        </ListItem>
        <ListItem disablePadding sx={{ justifyContent: "center", pt: 2 }}>
          <Button
            component={Link}
            to={`/${language}/contact`}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#96695e",
              textTransform: "none",
              fontFamily: "'HK Grotesk', system-ui, Avenir, Helvetica, Arial, sans-serif",
              borderRadius: "12px",
              padding: "10px 24px",
              mx: "auto",
              "&:hover": {
                backgroundColor: "#96695e",
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
      <AppBar 
        position="sticky"
        sx={{
          transform: showNav ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{ height: 100, bgcolor: "#fff", padding: { xs: 1, md: 2 }, position: "relative" }}
        >
          <img
            style={{ maxHeight: "100%", width: "auto", cursor: "pointer" }}
            src="/images/logo-normal.png "
            alt="Logo"
            onClick={() => navigate(`/${language}/`)}
          />

          {/* Centered Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              gap: "30px",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            {menuItems.map(renderDesktopNavLink)}
          </Box>

          {/* Desktop Language and Book Button - on the right */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "30px",
              marginLeft: "auto",
            }}
          >

            {/* Language Toggle */}
            <Box className="language-toggle" sx={{ paddingLeft: "20px" }}>
              <Typography
                component="span"
                variant="h6"
                sx={{
                  color: language === "en" ? "black" : "#666",
                  cursor: language === "en" ? "default" : "pointer",
                  fontSize: "0.85rem",
                }}
                onClick={
                  language === "en" ? undefined : () => changeLang("en")
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
                  fontSize: "0.85rem",
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
                  fontSize: "0.85rem",
                }}
                onClick={
                  language === "de" ? undefined : () => changeLang("de")
                }
              >
                de
              </Typography>
            </Box>

            {/* Book Appointment Button */}
            <Button
              component={Link}
              to={`/${language}/contact`}
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#96695e",
                textTransform: "none",
                fontFamily: "'HK Grotesk', system-ui, Avenir, Helvetica, Arial, sans-serif",
                borderRadius: "12px",
                padding: "10px 24px",
                "&:hover": {
                  backgroundColor: "#96695e",
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
