import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";
import ScrollList from "../components/homepage/ScrollList";
import SplashScreen from "../components/splashpage/SplashScreen";
import Header from "../components/homepage/header"; // 올바르게 Header 컴포넌트 불러오기
import AboutMeContent from "../components/homepage/AboutMeContent";
import ProjectsContent from "../components/homepage/ProjectsContent";
import InterviewContent from "../components/homepage/InterviewContent";
import HeroContent from "../components/homepage/HeroContent";
import SkillContent from "../components/homepage/SkillContent";
import BottomContent from "../components/homepage/BottomContent";

const HomePage: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  // 메뉴 클릭 시 해당 섹션으로 스크롤 이동
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.header')?.clientHeight || 0; // 헤더의 높이 가져오기
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight, // 섹션의 top에서 헤더 높이만큼 빼서 스크롤
        behavior: "smooth",
      });
    }
  };
  
  // 로고 클릭 시 상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => setFadeIn(true), 100); // Splash가 사라진 후 약간의 딜레이 후 실행
    }
  }, [showSplash]);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Header scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
          <div className={`homepage-container ${fadeIn ? "fade-in" : ""}`}>

            <HeroContent scrollToSection={scrollToSection}/>

            <AboutMeContent />

            <InterviewContent />

            <SkillContent />

            <ProjectsContent />

            <BottomContent />
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
