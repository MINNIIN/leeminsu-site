import React from "react";
import "../../css/HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Driver Monitoring Application",
    description: "운전자의 안전벨트 착용 여부, 졸음운전 상태를 실시간으로 감지하며, 운전자의 안전을 책임지는 시스템입니다.",
    technologies: ["React", "JavaScript", "Django","기획"],
    image: require("../../images/project/dma.png"),
    link: "/dmapage"
  },
  {
    title: "FestaNow",
    description: "공연 정보를 조회하고 공연에 함께 갈 동행자를 쉽고 빠르게 모집할 수 있는 서비스입니다. (진행 중)",
    technologies: ["React Native", "TypeScript", "Spring Boot", "1인 개발"],
    image: require("../../images/project/festanow.png"),
    link: "/festanowpage"
  },
  {
    title: "Cullinan",
    description: "게임 내부 다국어 번역 및 언어 전환 시스템 구현, 데이터 관리",
    technologies: ["Unity", "C#", "Excel", "Jira"],
    image: require("../../images/project/cullinan.png"),
    link: "/cullinanpage"
  }
];

const ProjectsContent: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>PROJECT</h2>
      {/* 슬라이드 컨테이너 */}
      <div className="projects-slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1} // 한 번에 한 프로젝트만 표시
          className="projects-slider"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <div className="project-card-left">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-right">
                <div className="project-info">
                  
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  {project.link && (
  <Link to={project.link} className="project-link">
    🔗 자세히 보기
  </Link>
)}
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsContent;
