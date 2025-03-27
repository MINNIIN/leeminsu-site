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

const SkillContent: React.FC = () => {
  return (
    <section id="skill" className="skill">
      <h2>SKILL</h2>

      <div className="skill-content">
        <div className="skill-box">
            <h3>FrontEnd</h3>
            <div className="skill-image-container">
            {/* 정사각형 이미지 3개 */}
            <img src={JavaScriptIcon} alt="Frontend Skill" className="square" />
            <img src={HtmlIcon} alt="Frontend Skill" className="square" />
            <img src={CssIcon} alt="Frontend Skill" className="square" />

            <img src={TypeScriptIcon} alt="Frontend Skill" className="square" />
            <img src={ReactIcon} alt="Frontend Skill" className="square" />
            <img src={XmlIcon} alt="Frontend Skill" className="square" />

            {/* 긴 이미지 1개 */}
            <img src={ReactNativeIcon} alt="Frontend Skill" className="wide" />
            </div>
        </div>

        <div className="skill-box">
        <h3>BackEnd</h3>
            <div className="skill-image-container">
            {/* 정사각형 이미지 3개 */}
            <img src={NodejsIcon} alt="Frontend Skill" className="square" />
            <img src={AwsIcon} alt="Frontend Skill" className="square" />
            <img src={LinuxIcon} alt="Frontend Skill" className="square" />

            {/* 긴 이미지 1개 */}
            <img src={DjangoIcon} alt="Frontend Skill" className="wide" />
            <img src={SpringbootIcon} alt="Frontend Skill" className="wide" />
            </div>
        </div>

        <div className="skill-box">
        <h3>TOOL</h3>
            <div className="skill-image-container">
            {/* 정사각형 이미지 3개 */}
            <img src={VisualstudiocodeIcon} alt="Frontend Skill" className="square" />
            <img src={IntellijIcon} alt="Frontend Skill" className="square" />
            <img src={AndroidstudioIcon} alt="Frontend Skill" className="square" />

            <img src={GithubIcon} alt="Frontend Skill" className="square" />
            <img src={SourcetreeIcon} alt="Frontend Skill" className="square" />
            <img src={NotionIcon} alt="Frontend Skill" className="square" />

            {/* 긴 이미지 1개 */}
            <img src={JiraIcon} alt="Frontend Skill" className="wide" />
            </div>
        </div>

        <div className="skill-box">
        <h3>Database</h3>
            <div className="skill-image-container">
            {/* 정사각형 이미지 3개 */}
            <img src={FirebaseIcon} alt="Frontend Skill" className="square" />
            <img src={MysqlIcon} alt="Frontend Skill" className="square" />
            <img src={OracleIcon} alt="Frontend Skill" className="square" />
            </div>
        </div>

      </div>
      
    </section>
  );
};

export default SkillContent;
