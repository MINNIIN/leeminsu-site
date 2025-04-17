import React, { useState } from "react";
import "../../css/FestaNow.css";
import { motion } from "framer-motion"; // 애니메이션 라이브러리 사용

import SplashPage from "../../images/festanow/FestanowSplash.png";
import MainPage from "../../images/festanow/FestanowMain.png";
import LoginPage from "../../images/festanow/FestanowLogin.png";
import MeetingListPage from "../../images/festanow/FestanowMeetings.png";
import CreateMeetingPage from "../../images/festanow/FestanowCreateMeeting.png";
import MeetingPage from "../../images/festanow/FestanowMeeting.png"; // 게시글 들어갔을때
import MeetingSearchPage from "../../images/festanow/FestanowMeetingSearch.png";
import JoinMeetingPage from "../../images/festanow/FestanowJoinMeeting.png";
import ApplicationsPage from "../../images/festanow/FestanowApplicationList.png";
import ApplicationOption from "../../images/festanow/FestanowApplicationsOption.png";
import MyMeetingApplicationList from "../../images/festanow/FestanowMyMeetingApplicationList.png";
import MyPage from "../../images/festanow/FestanowMyPage.png";
import PerformanceList from "../../images/festanow/PerformanceList.png"
import ChatRoom from "../../images/festanow/FestaNowChatRoom.png";

const images = [
  { name: "실행 화면", src: SplashPage },
  { name: "로그인 페이지", src: LoginPage },
  { name: "메인 페이지", src: MainPage },
  { name: "진행 중인 공연 조회", src: PerformanceList },
  { name: "모임 페이지", src: MeetingListPage },
  { name: "게시글 작성", src: CreateMeetingPage },
  { name: "게시글 확인", src: MeetingPage },
  { name: "게시글 검색", src: MeetingSearchPage },
  { name: "모임 참여 신청", src: JoinMeetingPage },
  { name: "신청서 확인", src: ApplicationsPage },
  { name: "신청서 관리", src: ApplicationOption },
  { name: "내 모임 확인", src: MyMeetingApplicationList },
  { name: "채팅방 (구현중)", src: ChatRoom },
  { name: "마이 페이지", src: MyPage },
];

const AppScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slide-content">
    <h2 className="screens-title">구현 화면</h2>
    <div className="screens-container">
      {/* 왼쪽 버튼 영역 */}
      <div className="buttons-container">
        {images.map((image, index) => (
          <button
            key={index}
            className={`screen-btn ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {image.name}
          </button>
        ))}
      </div>

      {/* 오른쪽 이미지 컨테이너 */}
      <div className="image-container">
        <motion.img
          key={activeIndex} // key를 변경하면 이미지가 새롭게 로드되면서 애니메이션 적용됨
          src={images[activeIndex].src}
          alt={images[activeIndex].name}
          initial={{ opacity: 0, x: 20 }} // 처음에 약간 오른쪽에 있고 투명함
          animate={{ opacity: 1, x: 0 }} // 부드럽게 나타남
          exit={{ opacity: 0, x: -20 }} // 사라질 때 왼쪽으로 이동하면서 투명해짐
          transition={{ duration: 0.5 }}
          className="screen-image"
        />
      </div>
    </div>
    </div>
  );
};

export default AppScreen;
