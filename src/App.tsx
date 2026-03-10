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
import { getRouteClassName } from "./utils/routes";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TreatmentPage from "./pages/TreatmentPage";
import FertilityPage from "./pages/FertilityPage";
import GynPage from "./pages/GynPage";
import PregPage from "./pages/PregPage";
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
        <Route path="/:lang/about" element={<AboutPage />} />
        <Route path="/:lang/ueber-mich" element={<AboutPage />} />
        <Route path="/:lang/treatment" element={<TreatmentPage />} />
        <Route path="/:lang/behandlung" element={<TreatmentPage />} />
        <Route path="/:lang/fertility" element={<FertilityPage />} />
        <Route path="/:lang/fruchtbarkeit" element={<FertilityPage />} />
        <Route path="/:lang/gynecology" element={<GynPage />} />
        <Route path="/:lang/gynaekologie" element={<GynPage />} />
        <Route path="/:lang/pregnancy" element={<PregPage />} />
        <Route path="/:lang/schwangerschaft" element={<PregPage />} />
        <Route path="/:lang/contact" element={<ContactPage />} />
        <Route path="/:lang/kontakt" element={<ContactPage />} />
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
