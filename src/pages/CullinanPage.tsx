import React from "react";
import "../css/CullinanPage.css";

import CullinanTitle from "../images/project/cullinan.png";
import CullinanGif from "../videos/CullinanGif.gif"
import CullinanExcel from "../images/project/CullinanExcel.png"
import CullinanStory from "../images/project/CullinanStory.png"

const CullinanPage: React.FC = () => {
  return (
    <div className="cullinan-container">
      <h1 className="cullinan-title">Cullinan</h1>

      <div className="cullinan-card">
        <p className="cullinan-description">• 게임 내부 다국어 번역 및 언어 전환 시스템 구현</p>
        <p className="cullinan-description">• 텍스트 데이터 관리</p>
      </div>

      {/* 중간 카드 2개 */}
      <div className="cullinan-middle-container">
        {/* 왼쪽: 텍스트 + 영상 */}
        <div className="cullinan-card">
          <p className="cullinan-description">Unity Localization을 활용한 다국어 지원 구현 ( 한국어, 영어, 일본어 )</p>
          <img src={CullinanGif} alt="Localization Demo" className="cullinan-gif" />
        </div>

        {/* 오른쪽: 텍스트 + 이미지 */}
        <div className="cullinan-card">
          <p className="cullinan-description">언어 데이터를 Excel, Unity Localization Table에서 관리</p>
          <p className="cullinan-description">텍스트를 동적으로 로드되도록 설정</p>
          <img src={CullinanExcel} className="cullinan-image" />
          <img src={CullinanStory} className="cullinan-image" />
          <p className="cullinan-description">Scriptable Object를 활용해 게임 내 스토리 데이터 관리</p>
          <p className="cullinan-description">오브젝트와 스토리 데이터를 연결해, 오브젝트 활성화 시 스토리 데이터가 동적으로 로드되고 스토리 메뉴 UI에 반영</p>
        </div>
      </div>
    </div>
  );
};

export default CullinanPage;
