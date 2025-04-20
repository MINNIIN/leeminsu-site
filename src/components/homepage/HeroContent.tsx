import React from "react";
import down_icon from "../../images/down_icon.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypingText from "./TypingText";

interface HeroContentProps {
    scrollToSection: (sectionId: string) => void;
}

const HeroContent:React.FC<HeroContentProps> = ({ scrollToSection }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="hero" className="hero" ref={ref}>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>안녕하세요, 이민수입니다.</h1>
        <p>항상 긍정적인 태도로 배우고 성장해나가며,</p>
        <p>사용자 중심의 가치 있는 시스템을 개발하는 것을 목표로 삼고 있습니다.</p>

        <h5>더보기</h5>
        <img src={down_icon} className="down-icon" onClick={() => scrollToSection('about')} />
      </motion.div>
    </section>
  );
};

export default HeroContent;