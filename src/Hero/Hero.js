import React from "react";
import "./Hero.css";
import "./10630-minimalist-black-phone-wallpaper-top-free-minimalist-black.jpg";

const Hero = () => {
  return (
    <main id="hero-con">
      <img
        id="hero-bg"
        src={require("./10630-minimalist-black-phone-wallpaper-top-free-minimalist-black.jpg")}
        alt="mini 4k"
      />
    </main>
  );
};

export default Hero;
