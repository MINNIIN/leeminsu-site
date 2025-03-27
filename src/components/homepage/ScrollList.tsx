import React from "react";
import "../css/Youtube.css"; // 스타일 파일 추가

const ScrollList: React.FC = () => {
  return (
    <div className="scroll-list__wrap">
      <h2>Scroll List</h2>
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}>Item {i + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollList;