import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"; // HomePage 불러오기
import DmaPage from "./pages/DmaPage";
import FestaNowPage from "./pages/FestaNowPage";
import CullinanPage from "./pages/CullinanPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 ('/')에 HomePage를 연결 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/dmapage" element={<DmaPage />} />
        <Route path="/festanowpage" element={<FestaNowPage />} />
        <Route path="/cullinanpage" element={<CullinanPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;