import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WhyChoiTCMPage from "./pages/WhyChoiTCMPage";
import FeePage from "./pages/FeePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-choi-tcm" element={<WhyChoiTCMPage />} />
        <Route path="/fee" element={<FeePage />} />
      </Routes>
    </Router>
  );
}

export default App;
