import React from "react";
import "../../css/LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="orbit-container">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>    
    </div>
  );
};

export default LoadingSpinner;
