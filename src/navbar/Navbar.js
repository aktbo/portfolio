import React from "react";
import "./Navbar.css";
import { GoThreeBars, GoHome } from "react-icons/go";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Navbar = () => {
  return (
    <main className="container-nav">
      <div className="home-con">
        <a href="/" id="gohome-a">
          <GoHome size={30} color={"#e1e1e1"} />
        </a>
      </div>
      <div className="bar-con">
        <a href={"/"} id="gothreebars-a">
          <GoThreeBars id={"bars-icon"} size={30} color={"#e1e1e1"} />
        </a>
      </div>
    </main>
  );
};

export default Navbar;
