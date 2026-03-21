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
import { translateUrlPath, getLocalizedPath } from "../utils/routes";
import { useState } from "react";

type NavigationProps = {
  logoScale?: number;
  barHeightScale?: number;
};

const Navigation = ({ logoScale = 1, barHeightScale = 1 }: NavigationProps) => {
  const { translations, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const logoMaxHeight = `${60 * logoScale}px`;
  const toolbarHeight = 100 * barHeightScale;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLang = (target: "en" | "de") => {
    // strip existing lang prefix (if any) and preserve the rest
    const stripped = location.pathname.replace(/^\/(en|de)/, "") || "/";

    // Translate URL path using centralized function
    const translatedPath = translateUrlPath(stripped, target);

    const newPath = `/${target}${translatedPath}${location.search}${location.hash}`;
    navigate(newPath);
    setLanguage(target);
  };

  const menuItems = [
    { path: getLocalizedPath("about", language), label: translations.app.Navigation.menuItems[0] },
    { path: getLocalizedPath("fertility", language), label: translations.app.Navigation.menuItems[1] },
    { path: getLocalizedPath("gynecology", language), label: translations.app.Navigation.menuItems[2] },
    { path: getLocalizedPath("pregnancy", language), label: translations.app.Navigation.menuItems[3] },
    { path: getLocalizedPath("treatment", language), label: translations.app.Navigation.menuItems[4] },
  ];

  const renderDesktopNavLink = (item: { path: string; label: string }) => (
    <Link
      className="navlink"
      key={item.path}
      to={item.path}
      style={{ textDecoration: "none" }}
      onClick={(e) => {
        if (location.pathname === item.path) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <Typography
        variant="h5"
        className="textDark fontMain"
        sx={{
          cursor: "pointer",
          fontSize: "1.15rem",
        }}
      >
        {item.label}
      </Typography>
    </Link>
  );

  const renderMobileNavLink = (item: { path: string; label: string }) => (
    <ListItem key={item.path} disablePadding>
      <Link
        to={item.path}
        style={{ textDecoration: "none", width: "100%" }}
        onClick={(e) => {
          if (location.pathname === item.path) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileOpen(false);
          } else {
            setMobileOpen(false);
          }
        }}
      >
        <ListItemText
          primary={item.label}
          sx={{
            textAlign: "center",
            "& .MuiTypography-root": {
              color: "#1A1A1A",
              fontSize: "1.2rem !important",
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
          <Box
            className="language-toggle"
            sx={{ textAlign: "center", width: "100%", py: 1 }}
          >
            <Typography
              component="span"
              sx={{
                color: language === "en" ? "#1A1A1A" : "#666",
                cursor: language === "en" ? "default" : "pointer",
                fontSize: "1.2rem !important",
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
                fontSize: "1.2rem !important",
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
            to={getLocalizedPath("contact", language)}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#A6463D",
              color: "#FFFFFF",
              textTransform: "none",
              borderRadius: "28px",
              padding: "10px 24px",
              fontSize: "1.2rem !important",
              mx: "auto",
              "&:hover": {
                backgroundColor: "#A6463D",
                color: "#FFFFFF",
              },
            }}
            className="fontMain"
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
          sx={{
            height: toolbarHeight,
            bgcolor: "#fff",
            padding: { xs: 1, md: 2 },
            position: "relative",
          }}
        >
          <img
            style={{ maxHeight: logoMaxHeight, width: "auto", cursor: "pointer" }}
            src="/images/logo-normal.png "
            alt="Logo"
            onClick={() => {
              if (location.pathname === `/${language}/`) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate(`/${language}/`);
              }
            }}
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
                onClick={language === "en" ? undefined : () => changeLang("en")}
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
                onClick={language === "de" ? undefined : () => changeLang("de")}
              >
                de
              </Typography>
            </Box>

            {/* Book Appointment Button */}
            <Button
              component={Link}
              to={getLocalizedPath("contact", language)}
              variant="contained"
              color="primary"
              sx={{
                  backgroundColor: "#A6463D",
                color: "#FFFFFF",
                textTransform: "none",
                borderRadius: "12px",
                padding: "10px 24px",
                "&:hover": {
                    backgroundColor: "#A6463D",
                  color: "#FFFFFF",
                },
              }}
              className="fontMain"
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
