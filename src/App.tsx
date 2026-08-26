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
import { ROUTES, getRouteClassName } from "./utils/routes";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TreatmentPage from "./pages/TreatmentPage";
import FertilityPage from "./pages/FertilityPage";
import GynPage from "./pages/GynPage";
import PregPage from "./pages/PregPage";
import ContactPage from "./pages/ContactPage";
import FeePage from "./pages/FeePage";
import { useEffect } from "react";

const NON_HOME_PAGE_ROUTES = [
  { key: "about", element: <AboutPage /> },
  { key: "treatment", element: <TreatmentPage /> },
  { key: "fertility", element: <FertilityPage /> },
  { key: "gynecology", element: <GynPage /> },
  { key: "pregnancy", element: <PregPage /> },
  { key: "contact", element: <ContactPage /> },
  { key: "fee", element: <FeePage /> },
] as const;

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
        {NON_HOME_PAGE_ROUTES.map(({ key, element }) => (
          <Route
            key={`route-${key}`}
            path={`/:lang${ROUTES[key].en}`}
            element={element}
          />
        ))}
        {NON_HOME_PAGE_ROUTES.map(({ key, element }) => (
          <Route
            key={`route-${key}-de`}
            path={`/:lang${ROUTES[key].de}`}
            element={element}
          />
        ))}
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
