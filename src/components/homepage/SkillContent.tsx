import React from "react";
import ReactIcon from '../../images/SkillImages/react.png'
import TypeScriptIcon from '../../images/SkillImages/typescript.png'
import JavaScriptIcon from '../../images/SkillImages/javascript.png'
import HtmlIcon from '../../images/SkillImages/html.png'
import CssIcon from '../../images/SkillImages/css3.png'
import XmlIcon from '../../images/SkillImages/xml.png'
import ReactNativeIcon from '../../images/SkillImages/reactnative1.png'
import NodejsIcon from '../../images/SkillImages/nodejs.png'
import SpringIcon from '../../images/SkillImages/spring.png'
import AwsIcon from '../../images/SkillImages/aws.png'
import MysqlIcon from '../../images/SkillImages/mysql.png'
import FirebaseIcon from '../../images/SkillImages/firebase.png'
import LinuxIcon from '../../images/SkillImages/linux.png'
import DjangoIcon from '../../images/SkillImages/django.png'
import SpringbootIcon from '../../images/SkillImages/springboot.png'
import OracleIcon from '../../images/SkillImages/oracle.png'
import VisualstudiocodeIcon from '../../images/SkillImages/vscode.png'
import IntellijIcon from '../../images/SkillImages/intellijidea.png'
import AndroidstudioIcon from '../../images/SkillImages/androidstudio.png'
import GithubIcon from '../../images/SkillImages/github.png'
import NotionIcon from '../../images/SkillImages/notion.png'
import JiraIcon from '../../images/SkillImages/jira.png'
import SourcetreeIcon from '../../images/SkillImages/sourcetree.png'
import "../../css/HomePage.css"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillContent: React.FC = () => {
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

  return (
    <section id="skill" className="skill" ref={ref}>
      <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
      <h2>SKILL</h2>

      <div className="skill-content">
        <div className="skill-box">
            <h3>FrontEnd</h3>
            <div className="skill-image-container">
            {/* 정사각형 이미지 3개 */}
            <img src={JavaScriptIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={HtmlIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={CssIcon} alt="Frontend Skill" className="square" loading="lazy"/>

            <img src={TypeScriptIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={ReactIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={XmlIcon} alt="Frontend Skill" className="square" loading="lazy"/>

            {/* 긴 이미지 1개 */}
            <img src={ReactNativeIcon} alt="Frontend Skill" className="wide" loading="lazy"/>
            </div>
        </div>

        <div className="skill-box">
        <h3>BackEnd</h3>
            <div className="skill-image-container">
            {/* 정사각형 이미지 3개 */}
            <img src={NodejsIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={AwsIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={LinuxIcon} alt="Frontend Skill" className="square" loading="lazy"/>

            {/* 긴 이미지 1개 */}
            <img src={DjangoIcon} alt="Frontend Skill" className="wide" loading="lazy"/>
            <img src={SpringbootIcon} alt="Frontend Skill" className="wide" loading="lazy"/>
            </div>
        </div>

        <div className="skill-box">
        <h3>TOOL</h3>
            <div className="skill-image-container">
            {/* 정사각형 이미지 3개 */}
            <img src={VisualstudiocodeIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={IntellijIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={AndroidstudioIcon} alt="Frontend Skill" className="square" loading="lazy"/>

            <img src={GithubIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={SourcetreeIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={NotionIcon} alt="Frontend Skill" className="square" loading="lazy"/>

            {/* 긴 이미지 1개 */}
            <img src={JiraIcon} alt="Frontend Skill" className="wide" loading="lazy"/>
            </div>
        </div>

        <div className="skill-box">
        <h3>Database</h3>
            <div className="skill-image-container">
            {/* 정사각형 이미지 3개 */}
            <img src={FirebaseIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={MysqlIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            <img src={OracleIcon} alt="Frontend Skill" className="square" loading="lazy"/>
            </div>
        </div>

      </div>
      </motion.div>
    </section>
  );
};

export default SkillContent;
