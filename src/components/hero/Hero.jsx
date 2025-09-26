import React from "react";
import './Hero.css';

const Hero = ({ text = "" }) => {
  return (
      <div className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            {text}
          </h1>
        </div>
      </div>
  );
};

export default Hero;
