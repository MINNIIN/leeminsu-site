import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DmaPage from "./pages/DmaPage";
import FestaNowPage from "./pages/FestaNowPage";
import CullinanPage from "./pages/CullinanPage";
import ScrollToTop from "./ScrollToTop";
// import SplashScreen from "./components/splashpage/SplashScreen";

const App: React.FC = () => {
  return (
    <Router>  {/* 최상단에서 Router 감싸기 */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dmapage" element={<DmaPage />} />
        <Route path="/festanowpage" element={<FestaNowPage />} />
        <Route path="/cullinanpage" element={<CullinanPage />} />
      </Routes>
    </Router>
  );
};

export default App;
