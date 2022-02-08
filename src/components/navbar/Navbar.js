import React from "react";
import "./Navbar.css";
import { FiCircle, FiMessageSquare, FiInfo } from "react-icons/fi";

const Navbar = () => {
  return (
    <main className="nav-container">
      <div className="backhome-con">
        <a href="/" id="home-a">
          <FiCircle size={30} color={"#e1e1e1"} />
        </a>
      </div>

      <div className="contact-con">
        <a href="/contact" id="contact-a">
          <FiMessageSquare id={"contact-icon"} size={30} color={"#e1e1e1"} />
        </a>
      </div>

      <div className="about-con">
        <a href="/about" id="about-a">
          <FiInfo size={30} color={"#e1e1e1"} />
        </a>
      </div>
    </main>
  );
};

export default Navbar;
