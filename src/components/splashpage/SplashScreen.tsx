import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/SplashScreen.css";

const SplashScreen: React.FC = () => {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setStep(1), 800);  // "LEE" 등장
    setTimeout(() => setStep(2), 1600); // "MINSU" 등장
    setTimeout(() => setStep(3), 2400); // "Portfolio" 등장
    setTimeout(() => setFadeOut(true), 3000); // 페이드 아웃 시작
    setTimeout(() => navigate("/home"), 4000); // 4초 후 HomePage로 이동
  }, [navigate]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="text-container">
        <h1 className={`logo ${step >= 1 ? "fade-in" : ""}`}>LEE</h1>
        <h1 className={`logo ${step >= 2 ? "fade-in" : ""}`}>MINSU</h1>
        <h1 className={`logo ${step >= 3 ? "fade-in" : ""}`}>Portfolio</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
