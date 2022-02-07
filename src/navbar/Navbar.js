import React from "react";
import "./Navbar.css";
import { GoThreeBars, GoHome } from "react-icons/go";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Navbar = () => {
  return (
    <main className="container-nav">
      <div className="home-a">
        <a href="/">
          <GoHome size={30} color={"#e1e1e1"} />
        </a>
      </div>
      <div className="bar-a">
        <a href={"/"}>
          <GoThreeBars id={"bars-icon"} size={30} color={"#e1e1e1"} />
        </a>
      </div>
    </main>
  );
};

export default Navbar;
