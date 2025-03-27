import React from "react";
import "../css/ProjectDetail.css";
import DriverMonitoring from "../images/project/DriverMonitoring.png"
import MonitoringResults from "../images/project/MonitoringResults.png"
import DmaIntro from "../images/project/dma_intro.png"
import DmaLogin from "../images/project/dma_login.png"
import DmaMain from "../images/project/dma_main.png"
import DmaMonitoring from "../images/project/dma_monitoring.png"
import DmaOption from "../images/project/dma_option.png"

const DmaPage: React.FC = () => {
  return (
    <div className="dma-page">
      <div className="dma-header">
        <h1>Driver Monitoring Application</h1>
        <p>운전자의 안전을 위한 AI 기반 모니터링 시스템</p>
      </div>
      
      <div className="dma-content">
        {/* <img src={require("../images/project/dma.png")} alt="Driver Monitoring App" className="dma-image" /> */}

        <div className="dma-details">

            <div className="dma-details-content">
            <h2>배경 및 목표</h2>
            <p>
            매년 발생하는 교통사고 유형 중에서 졸음, 주시 태만, 안전벨트 미착용으로 인한 사망자 수가 절반 이상을 차지합니다.
            </p>
            <p>저희는 교통사고로 인한 사망률뿐만 아니라 교통사고 발생률을 감소시키고, 운전자의 안전을 최우선적인 목표로 삼았습니다.</p>
            </div>
          
            <div className="dma-details-content">
                <h2>소개</h2>
                <p>차량에 설치된 카메라를 통해 운전자를 실시간 모니터링하고 학습된 딥러닝 모델을 통해</p>
                <p>운전자의 안전벨트 착용 여부, 졸음운전 상태를 실시간으로 분석합니다.</p>
                <p>분석 결과는 실시간으로 확인 가능하며, 이를 통해 졸음운전 여부와 안전벨트 착용 여부를 확인하고 예방할 수 있습니다.</p>
            </div>
          
        <div className="dma-details-content">
          <h2>사용 기술</h2>
          <div className="tech-stack">
            <div className="tech-item">React</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">Styled Components</div>
            <div className="tech-item">Django</div>
            <div className="tech-item">WebSocket</div>
            <div className="tech-item">GitHub</div>
            <div className="tech-item">Discord</div>
          </div>
        </div>

        <h2>담당 역할</h2>
        <div className="dma-myposition">
        
        <div className="dma-role-box">
            <h4>백엔드 서버 구축</h4>
        <div className="dma-role-content">
            <ul>
                <li>• Django 서버에 딥러닝 모델 배포</li>
                <li>• 웹소켓 통신으로 React 클라이언트와 연결</li>
                <li>• 클라이언트는 실시간 운전자 모습을 서버로 전송하고 딥러닝 모델이 분석하여 결과 반환</li>

                <div className="dma-role-content-image">
                <img src={DriverMonitoring} className="dma-role-content-monitoring"></img>
                <img src={MonitoringResults} className="dma-role-content-result"></img>
                </div>
                
                
            </ul>
        </div>
        </div>

        <div className="dma-role-box">
            <h4>사용자 인터페이스 개발</h4>
        <div className="dma-role-content">
            <ul>
            
              <div className="dma-role-content-interface">
                <div className="dma-role-content-inside">
                <li>인트로</li>
                <img src={DmaIntro} className="dma-role-content-interfaceImage"></img>
                </div>               
                <div className="dma-role-content-inside">
                <li>로그인 페이지</li>
                <img src={DmaLogin} className="dma-role-content-interfaceImage"></img>
                </div>
              </div>

              <div className="dma-role-content-interface">
                <div className="dma-role-content-inside">
                <li>메인 페이지</li>
                <img src={DmaMain} className="dma-role-content-interfaceImage"></img>
                </div>               
                <div className="dma-role-content-inside">
                <li>모니터링 페이지</li>
                <img src={DmaMonitoring} className="dma-role-content-interfaceImage"></img>
                </div>
              </div>

              <div className="dma-role-content-interface">
                <div className="dma-role-content-inside">
                <li>설정 페이지</li>
                <div className="dma-role-content-image">
                <img src={DmaOption} className="dma-role-content-interfaceImage"></img>
                </div>
                </div>
              </div>
            </ul>
        </div>
        </div>
</div>


          <a href="https://github.com/MINNIIN/DMA.git" target="_blank" rel="noopener noreferrer" className="dma-link">
            🔗 GitHub에서 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default DmaPage;
