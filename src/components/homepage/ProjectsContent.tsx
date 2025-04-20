import React from "react";
import "../../css/HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


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
    description: "공연 정보를 조회하고 공연에 함께 갈 동행자를 쉽고 빠르게 모집할 수 있는 서비스입니다.",
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

const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="projects-slider-container" // 기존 스타일 그대로 유지
    >
      {children}
    </motion.div>
  );
};

const ProjectsContent: React.FC = () => {
  const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
      });

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
      <h2>PROJECT</h2>
      {/* 슬라이드 컨테이너 */}
      <Box>
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
        </Box>
      </motion.div>
    </section>
  );
};

export default ProjectsContent;
