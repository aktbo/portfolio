import React from "react";
import "./Hero.css";
import { FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Moon.png";

const Hero = () => {
  return (
    <div className="hero-box">
      <img src="Moon.png" alt="Moon" />

      <p>About Me</p>
      <header>Aaron Thibeaux</header>
      <p>
        Asdfa ajfajf asjfjsfn sjdfnfnjaf fjasdfjfjsdf fjsdfdjsfjdsnfjsdf
        fjdsnfjnsdf fsdjfnjdfnf fjsjfnsnfjnsdf dsfnsdjfsdjfsdf sdfjnsdjfnsdnfs
        dfjsdnfndsfnsd sdjfsdnjfnajnfjn.
      </p>

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
