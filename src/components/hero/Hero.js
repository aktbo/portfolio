import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-con">
      {/* new css animation */}
      <div className="circle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* ^^^^^^^^^^^^^^^^^ */}
      <div id="hero-links-con">
        <div id="github-a">
          <a href="https://github.com/aktbo">Github</a>
        </div>
        <div id="linkedin-a">
          <a href="https://www.linkedin.com/in/aaron-thibeaux-863b09212/">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
