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
import { getRouteClassName, getLocalizedPath, ROUTES } from "./utils/routes";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TreatmentPage from "./pages/TreatmentPage";
import AcupuncturePage from "./pages/AcupuncturePage";
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

  return (
    <div className={`app-container ${getRouteClassName(location.pathname)}`}>
      <Routes>
        {/* Redirect root to default language */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<HomePage />} />
        <Route path={getLocalizedPath("about", "en")} element={<AboutPage />} />
        <Route path={getLocalizedPath("about", "de")} element={<AboutPage />} />
        <Route
          path={getLocalizedPath("treatment", "en")}
          element={<TreatmentPage />}
        />
        <Route
          path={getLocalizedPath("treatment", "de")}
          element={<TreatmentPage />}
        />
        <Route
          path={getLocalizedPath("acupuncture", "en")}
          element={<AcupuncturePage />}
        />
        <Route
          path={getLocalizedPath("acupuncture", "de")}
          element={<AcupuncturePage />}
        />
        <Route
          path="/:lang/book-appointment"
          element={<BookAppointmentPage />}
        />
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
