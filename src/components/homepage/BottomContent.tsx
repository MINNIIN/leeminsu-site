import React from "react";
import "../../css/HomePage.css";

const BottomContent: React.FC = () => {
  return (
    <section className="bottom">
      <footer className="bottom-content">
      {/* <h2>봐주셔서 감사합니다 </h2> */}
      
      <p className="bottom-subtext">Using : React, TypeScript, Tailwind CSS</p>
      <p className="bottom-copyright">© 2025 LEE MINSU. All Rights Reserved.</p>
    </footer>
    </section>
  );
};

export default BottomContent; 