// Header.tsx
import React, {useState, useEffect} from "react";
import "../../css/HomePage.css"

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, scrollToTop }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
    const scrollChangeMenu = () => {
      if(window.scrollY > 150){
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", scrollChangeMenu);
  
      return() => {
        window.addEventListener("scroll", scrollChangeMenu);
      };
    }, []);
    
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo" onClick={scrollToTop}>LEE MINSU</div>
      <nav className="menu">
        <ul>
          <li onClick={() => scrollToSection("about")}>ABOUT ME</li>
          <li onClick={() => scrollToSection("interview")}>INTERVIEW</li>
          <li onClick={() => scrollToSection("skill")}>SKILL</li>
          <li onClick={() => scrollToSection("projects")}>PROJECTS</li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
