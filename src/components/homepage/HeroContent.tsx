import React from "react";
import down_icon from "../../images/down_icon.png"

interface HeroContentProps {
    scrollToSection: (sectionId: string) => void;
}

const HeroContent:React.FC<HeroContentProps> = ({ scrollToSection }) => {

    return (
        <section id="hero" className="hero">
              <div className="hero-content">
                <h1>안녕하세요, 이민수입니다.</h1>
                <p>항상 긍정적인 태도로 배우고 성장해나가며,</p>
                <p>사용자 중심의 가치 있는 시스템을 개발하는 것을 목표로 삼고 있습니다.</p>
                {/* <button className="primary-button" onClick={() => scrollToSection('about')}>
                  더 알아보기
                </button> */}
                <h5>더보기</h5>
                <img src={down_icon} className="down-icon" onClick={() => scrollToSection('about')} /> 
                
              </div>
            </section>
    )
}

export default HeroContent;