import React, { useState } from "react";
import "../css/FestaNow.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import FestaNow from '../images/project/festanow.png'
import AppScreen from "../components/festanowpage/AppScreen";

import ReactNativeIcon from '../images/SkillImages/react.png'
import TypeScriptIcon from '../images/SkillImages/typescript.png'
import JavaScriptIcon from '../images/SkillImages/javascript.png'
import AWSIcon from '../images/SkillImages/aws.png'
import FirebaseIcon from '../images/SkillImages/firebase.png'
import SpringBootIcon from '../images/SkillImages/spring.png'
import NodejsIcon from '../images/SkillImages/nodejs.png'
import JiraIcon from '../images/SkillImages/jira_small.png'
import FigmaIcon from '../images/SkillImages/shortfigma.png'

const techStack = [
    { name: "ReactNative", image: ReactNativeIcon },
    { name: "TypeScript", image: TypeScriptIcon },
    // { name: "JavaScript", image: JavaScriptIcon },
    { name: "SpringBoot", image: SpringBootIcon },
    { name: "Node.js", image: NodejsIcon },
    { name: "AWS", image: AWSIcon },
    { name: "Firebase", image: FirebaseIcon },
    { name: "Jira", image: JiraIcon },
    { name: "Figma", image: FigmaIcon },

];

const FestaNowPage = () => {
    const [progress, setProgress] = useState(0);
    return (
        <div className="festanow-page">
            <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                navigation
                onSlideChange={(swiper: SwiperClass) => setProgress(((swiper.activeIndex + 1) / swiper.slides.length) * 100)}
                effect="fade"
                speed={1000} // 부드러운 페이드 효과 (1초)
                className="festanow-slider"
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <h1>
                        <span className="white-text">Festa</span>
                        <span className="red-text">Now</span>
                        </h1>
                        <p>공연 정보를 조회하고 공연에 함께 갈 동행자를 쉽고 빠르게 모집할 수 있는 서비스입니다.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide-content">
                    <h2>프로젝트 소개</h2>
                <div className="content-wrapper">
                    <img src={FestaNow} className="festanow-image" alt="FestaNow 프로젝트 이미지" />
                <div className="text-content">
                    <p>저희 앱은 사용자가 관심 있는 공연에 함께 갈 동행자를 모집할 수 있는 플랫폼입니다.</p>
                    <p>사용자는 공연 정보를 조회하고 원하는 공연에 대한 모집 게시글을 작성하거나, 다른 사용자의 모임에 참여할 수 있습니다.</p>
                    <p>저희 서비스는 공연 관람과 문화생활의 즐거움을 더하고, 새로운 인연을 만날 수 있는 기회를 제공합니다.</p>
                </div>
                </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <h2>제공 서비스</h2>
                        <ul>
                            <li>• 현재 진행 중인 공연 및 문화생활 정보 조회</li>
                            <li>• 함께할 문화 생활 동행자 모집</li>
                            <li>• 원하는 문화 생활 모임에 가입, 모임원 채팅 기능</li>
                            <li>• 공연 일자나 티켓 예매 날짜 등 캘린더에 일정을 등록하여 해당 시간에 알림</li>
                        </ul>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <h2>담당 역할</h2>
                        <ul>
                        <li><span className="red-check">✔</span> 앱 인터페이스 및 주요 기능 개발, 백엔드 서버 구축, 데이터베이스 관리</li>
                        <li><span className="red-check">✔</span> Firebase Authentication과 Firestore Database을 활용한 회원가입, 로그인 및 회원 정보 관리</li>
                        <li><span className="red-check">✔</span> 공연 정보 API를 활용한 진행 중인 공연 검색 및 상세 정보 조회 기능 구현</li>
                        <li><span className="red-check">✔</span> Firestore Database를 이용한 게시글 데이터 관리 및 AWS S3 버킷을 활용한 사용자 업로드 이미지 저장 및 관리</li>
                        <li><span className="red-check">✔</span> Node.js를 활용 게시글 조회 및 검색 API 구축</li>
                        <li><span className="red-check">✔</span> Spring Boot와 FCM을 활용한 모임 신청 알림, 신청서 조회 및 신청서 상태 관리(승인, 거절, 취소) API 구축</li>
                        <li><span className="red-check">✔</span> API → AWS EC2 인스턴스 배포 → 앱 실행 시 자동화</li>
                        </ul>
                    </div>
                </SwiperSlide>

                {/* 기술 스택 슬라이드 */}
                <SwiperSlide>
                    <div className="slide-content">
                        <h2>기술 스택</h2>
                        <div className="tech-stack-container">
                        {techStack.map((tech, index) => (
                            <div key={index} className="tech-box">
                            <img
                            src={tech.image}
                            alt={tech.name}
                            className={`tech-icon ${tech.name === "ReactNative" ? "tech-icon-react-native" : ""}`}
                            />
                            <p className={`tech-name ${tech.name === "ReactNative" ? "tech-name-react-native" : ""}`}>
                            {tech.name}
                            </p>
                    </div>
                    ))}
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <AppScreen />
                </SwiperSlide>
            </Swiper>

            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default FestaNowPage;
