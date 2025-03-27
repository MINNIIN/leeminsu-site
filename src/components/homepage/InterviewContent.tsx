import React from "react";
import "../../css/HomePage.css";

const InterviewContent: React.FC = () => {
  return (
    <section id="interview" className="interview">
      <h2>INTERVIEW</h2>
      <div className="interview-content">
        <div className="interview-box">
          <h1 className="interview-title">개발자를 꿈꾸게 된 이유가 있나요?</h1>
          <h1 className="interview-text">다양한 시스템들이 어떤 과정을 거쳐 개발되고 사용자가 어떻게 이를 사용하는지에 대한 큰 궁금증이 있었습니다. </h1>
          <h1 className="interview-text">이러한 궁금증을 바탕으로 대학교에서 첨단IT학부를 전공하였고, 개인 프로젝트를 진행하는 등 다양한 경험을 통해 현업의 흐름을 </h1>
          <h1 className="interview-text">이해하려 노력했습니다. 또한 제가 원하는 시스템을 실제로 구현할 수 있다는 매력에 이끌려 개발자의 꿈을 가지게 되었습니다</h1>
        </div>

        <div className="interview-box">
          <h1 className="interview-title">개발자로서 역량을 키우기 위해 어떤 노력을 했나요?</h1>
          <h1 className="interview-text">대학교 강의와 팀 프로젝트뿐만 아니라, 자격증 공부와 온라인 학습을 통해 부족한 부분을 보완하며 개발자로서 성장해왔습니다.</h1>
          <h1 className="interview-text">특히, 현재 진행 중인 개인 프로젝트를 통해 기획, 개발, 테스트, 배포 등의 모든 과정을 직접 수행하며 실무 역량을 키우려 하고 있습니다.</h1>
          <h1 className="interview-text">이 과정에서 문제 해결 능력을 기르고, 새로운 기술을 탐색하며 실무에서 필요한 개발 역량을 쌓아가고 있습니다</h1>
        </div>

        <div className="interview-box">
          <h1 className="interview-title">개발자로서 이루고 싶은 최종 목표가 있나요?</h1>
          <h1 className="interview-text">제가 개발한 시스템으로 사회에 기여하는 것은 물론, 기술적 역량뿐만 아니라 사용자 경험까지 고려한 개발자로 성장하여</h1>
          <h1 className="interview-text">더 좋은 서비스를 제공하고 싶습니다.</h1>
        </div>

      </div>
      
    </section>
  );
};

export default InterviewContent;
