import React from "react";
import "./Hero.css";
import "./minimalist4k.jpg";

const Hero = () => {
  return (
    <main id="hero-con">
      <img id="hero-bg" src={require("./minimalist4k.jpg")} alt="mini 4k" />
    </main>
  );
};

export default Hero;
