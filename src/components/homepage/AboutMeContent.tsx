import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../../css/HomePage.css';
import MyProfile from '../../images/MyProfile.jpeg';
import FreeMyPhoto from '../../images/FreeMyPhoto.jpeg';
import GitHubIcon from '../../images/SkillImages/github.png';
import TistoryIcon from '../../images/SkillImages/tistory.png';

const Contain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="about-contact-phone" // 기존 스타일 그대로 유지
    >
      {children}
    </motion.div>
  );
};

const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="about-content" // 기존 스타일 그대로 유지
    >
      {children}
    </motion.div>
  );
};

const AboutMeContent: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>ABOUT ME</h2>
        <Box>
          <div className="about-image">
            <img src={FreeMyPhoto} alt="My Photo" style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto'}} />
          </div>

          <div className="about-contact-introduction">
          <div className="about-text">
          <h3 className="about-contact-title">INTRODUCTION</h3>
            <p className="about-contact-text">
              백석대학교 첨단IT학부를 전공하며 컴퓨터 공학 이론과 프로그래밍 및 인공지능, 빅데이터 등 다양한 분야를 학습하였습니다.
            </p>
          </div>

          <div className="about-contact-phone">
            <h3 className="about-contact-title">PHONE</h3>
            <h4 className="about-contact-text">010-4630-2078</h4>
          </div>

          <div className="about-contact-email">
            <h3 className="about-contact-title">EMAIL</h3>
            <h4 className="about-contact-text">jujoa102949@gmail.com</h4>
          </div>

          <div className="about-contact-link">
  <h3 className="about-contact-title">LINKS</h3>
  <div className="about-contact-icons">
    <a href="https://github.com/MINNIIN" target="_blank" rel="noopener noreferrer">
      <img src={GitHubIcon} alt="GitHub" className="icon-button" />
    </a>
    <a href="https://codingco.tistory.com/" target="_blank" rel="noopener noreferrer">
      <img src={TistoryIcon} alt="Tistory" className="icon-button" />
    </a>
  </div>
</div>
          </div>
          
          </Box>
      </motion.div>
    </section>
  );
};

export default AboutMeContent;
