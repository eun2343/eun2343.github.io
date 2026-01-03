import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { LanguageProvider } from "./translation/LanguageContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TreatmentPage from "./pages/TreatmentPage";
import FeePage from "./pages/FeePage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import { useEffect } from "react";

// Component to handle route-based styling
const AppWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing route classes
    document.body.className = document.body.className
      .replace(/route-\S+/g, "")
      .trim();

    // Add route-specific class to body
    const routeClass = getRouteClass(location.pathname);
    document.body.classList.add(routeClass);
  }, [location.pathname]);

  const getRouteClass = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "route-home";
      case "/about":
        return "route-about";
      case "/why-choi-tcm":
        return "route-why-choi-tcm";
      case "/treatment":
        return "route-treatment";
      case "/fee":
        return "route-fee";
      case "/book-appointment":
        return "route-book-appointment";
      default:
        return "route-unknown";
    }
  };

  return (
    <div className={`app-container ${getRouteClass(location.pathname)}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/treatment" element={<TreatmentPage />} />
        <Route path="/fee" element={<FeePage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppWrapper />
      </Router>
    </LanguageProvider>
  );
}

export default App;
