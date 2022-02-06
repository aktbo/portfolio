import React from "react";
import "./Navbar.css";
import { GoThreeBars, GoHome } from "react-icons/go";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Navbar = () => {
  return (
    <main className="container-nav">
      <div className="home-a">
        <a href="/">
          <GoHome size={30} />
        </a>
      </div>
      <div id="bar-a">
        <a href={"/"}>
          <GoThreeBars className={"bars-icon"} size={30} />
        </a>
      </div>
    </main>
  );
};

export default Navbar;
