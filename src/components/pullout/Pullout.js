import React from "react";
import "./Pullout.css";
import { FiCircle } from "react-icons/fi";

const Pullout = () => {
  return (
    <div className="pullout-con" hidden>
      <div className="pullout-as">
        <div id="circle-pa">
          <a href="/">
            <FiCircle size={60} color={"#e1e1e1"} />
          </a>
        </div>
        <div id="projects-pa">
          <a href="/">Projects</a>
        </div>

        <hr></hr>

        <div id="values-pa">
          <a href="/">Values</a>
        </div>

        <hr></hr>

        <div id="about-pa">
          <a href="/">About</a>
        </div>

        <hr></hr>

        <div id="contact-pa">
          <a href="/">Contact</a>
        </div>

        <hr></hr>

        <div id="github-pa">
          <a href="/">Github</a>
        </div>

        <hr></hr>

        <div id="linkedin-pa">
          <a href="/">LinkedIn</a>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Pullout;
