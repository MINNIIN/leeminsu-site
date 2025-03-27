import React from "react";
import '../../css/HomePage.css';
import MyProfile from '../../images/MyProfile.jpeg';
import MyPhoto from '../../images/MyPhoto.jpeg';

interface AboutMeProps {}

const AboutMeContent: React.FC = () => {
    return (
        <section id="about" className="about">
            <h2>ABOUT ME</h2>
            <div className="about-content">

                <div className="about-image">
                    <img src={MyProfile} alt="My Photo" style={{ width: '100%', height: 'auto', transform: 'translateY(-15%)' }} />
                </div>

                <div className="about-text">
                    <p>
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
                    <h4 className="about-contact-text">
                        <a href="https://github.com/MINNIIN" target="_blank" rel="noopener noreferrer">GitHub</a> |  
                        <a href="https://codingco.tistory.com/" target="_blank" rel="noopener noreferrer">Tistory</a>
                    </h4>
                </div>
            </div>
        </section>
    );
}

export default AboutMeContent;
