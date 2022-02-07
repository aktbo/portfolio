import React from "react";
import "./Navbar.css";
import {
  FiCircle,
  FiChevronsUp,
  FiChevronsDown,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <main className="container-nav">
      <div className="home-con">
        <a href="/" id="gohome-a">
          <FiCircle size={30} color={"#e1e1e1"} />
        </a>
      </div>
      <div className="arrow-con">
        <button id="rightarrow-btn">
          <FiChevronRight id={"bars-icon"} size={30} color={"#e1e1e1"} />
        </button>
      </div>
    </main>
  );
};

export default Navbar;
