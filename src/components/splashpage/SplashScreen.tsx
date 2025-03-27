import React, { useEffect, useState } from "react";
import "../../css/SplashScreen.css";

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setStep(1), 800);  // "LEE" 등장
    setTimeout(() => setStep(2), 1600); // "MINSU" 등장
    setTimeout(() => setStep(3), 2400); // "Portfolio" 등장
    setTimeout(() => setFadeOut(true), 3000); // 4초 후 페이드 아웃 시작
    setTimeout(() => onFinish(), 4000); // 5초 후 홈으로 이동
  }, [onFinish]);

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
