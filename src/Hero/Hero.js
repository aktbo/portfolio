import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-con">
      <p id="hero-head">
        Aaron
        <br /> Thibeaux
        <br /> Web developer
      </p>
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
          <a href="/">Github</a>
        </div>
        <div id="linkedin-a">
          <a href="/">LinkedIn</a>
        </div>
        <div id="indeed-a">
          <a href="/">Indeed</a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
