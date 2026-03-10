import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { LanguageProvider } from "./translation/LanguageContext";
import { usePageTitle } from "./translation/usePageTitle";
import { getRouteClassName, getLocalizedPath } from "./utils/routes";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TreatmentPage from "./pages/TreatmentPage";
import FertilityPage from "./pages/FertilityPage";
import GynPage from "./pages/GynPage";
import PregPage from "./pages/PregPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import ContactPage from "./pages/ContactPage";
import { useEffect } from "react";

// Component to handle route-based styling
const AppWrapper = () => {
  const location = useLocation();
  usePageTitle(); // Set page title based on route and language

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Remove existing route classes
    document.body.className = document.body.className
      .replace(/route-\S+/g, "")
      .trim();

    // Add route-specific class to body
    const routeClass = getRouteClassName(location.pathname);
    document.body.classList.add(routeClass);
  }, [location.pathname]);

  const getRouteClass = (pathname: string) => {
    // strip language prefix (/en or /de)
    const stripped = pathname.replace(/^\/(en|de)/, "") || "/";
    switch (stripped) {
      case "/":
        return "route-home";
      case "/about":
        return "route-about";
      case "/why-choi-tcm":
        return "route-why-choi-tcm";
      case "/treatment":
        return "route-treatment";
      case "/fertility":
        return "route-fertility";
      case "/gynecology":
        return "route-gynecology";
      case "/pregnancy":
        return "route-pregnancy";
      case "/book-appointment":
        return "route-book-appointment";
      case "/contact":
        return "route-contact";
      default:
        return "route-unknown";
    }
  };

  return (
    <div className={`app-container ${getRouteClassName(location.pathname)}`}>
      <Routes>
        {/* Redirect root to default language */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<HomePage />} />
        <Route path="/:lang/about" element={<AboutPage />} />
        <Route path="/:lang/treatment" element={<TreatmentPage />} />
        <Route path="/:lang/fertility" element={<FertilityPage />} />
        <Route path="/:lang/gynecology" element={<GynPage />} />
        <Route path="/:lang/pregnancy" element={<PregPage />} />
        <Route path="/:lang/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/:lang/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppWrapper />
      </LanguageProvider>
    </Router>
  );
}

export default App;
