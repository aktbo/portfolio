import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiInfo, FiChevronsUp, FiMessageSquare } from "react-icons/fi";

const Navbar = () => {
  return (
    <main className="container-nav">
      <div className="info-con">
        <a href="/" id="info-a">
          <FiInfo size={30} color={"#e1e1e1"} />
        </a>
      </div>
      <div className="contact-con">
        <button id="contact-btn">
          <FiMessageSquare id={"bars-icon"} size={30} color={"#e1e1e1"} />
        </button>
      </div>
    </main>
  );
};

export default Navbar;
