
import React, { useEffect, useState } from "react";
import animationVideo from "../assets/grid.mp4"; 
import "./GridAnimation.css"; 

const GridAnimation = () => {

  const [glow, setGlow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setGlow(true);
    }, 3000); // Matches typing duration
  }, []);


  return (
    <div id="animation-container">
      <video autoPlay loop muted playsInline>
        <source src={animationVideo} type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>
      
      <div className={`overlay-text ${glow ? "glow" : ""}`}>
        <span className="typing-animation">Revolutionize Power...</span>
      </div>
      
    </div>
  );
};

export default GridAnimation;