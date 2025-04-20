import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed: number;
  delay: number;
  className: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed, delay, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + text[index]);
      index += 1;
      if (index === text.length) clearInterval(intervalId);
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, delay]);

  return <span className={className}>{displayedText}</span>;
};

export default TypingText;