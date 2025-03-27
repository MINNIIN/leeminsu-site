import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, useNavigate  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DmaPage from "./pages/DmaPage";
import FestaNowPage from "./pages/FestaNowPage";
import CullinanPage from "./pages/CullinanPage";
import ScrollToTop from "./ScrollToTop";
import SplashScreen from "./components/splashpage/SplashScreen";

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const navigate = useNavigate();

  // SplashScreen이 끝난 후 호출되는 함수
  const handleSplashFinish = () => {
    setIsSplashVisible(false); // SplashScreen이 끝나면 HomePage로 이동
    navigate("/home");
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* SplashScreen을 루트 경로에 설정 */}
        {isSplashVisible ? (
          <Route path="/" element={<SplashScreen onFinish={handleSplashFinish} />} />
        ) : (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dmapage" element={<DmaPage />} />
            <Route path="/festanowpage" element={<FestaNowPage />} />
            <Route path="/cullinanpage" element={<CullinanPage />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
