import React from "react";
import "./Hero.css";
import { FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Moon.png";
import "./Sky.png";

const Hero = () => {
  return (
    <div className="hero-box">
      {/* <img src={require("./Sky.png")} alt="Sky" className="sky-pic" /> */}
      <p className="large-heading"> Focused, Motivated,</p>
      {/* <img src={require("./Moon.png")} alt="Moon" className="moon-pic" /> */}
      <div className="info-box">
        <p className="p-heading">About Me</p>
        <p className="header">Aaron Thibeaux</p>
        <p className="text-block">
          Specifies the alignment between the lines inside a flexible container
          when the items do not use all available space. Specifies the alignment
          for selected items inside a flexible container.
        </p>
      </div>

      <button className="contact-btn">
        <IconContext.Provider
          value={{ className: "contact-icon", size: "30px" }}
        >
          <FaEnvelope />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Hero;
