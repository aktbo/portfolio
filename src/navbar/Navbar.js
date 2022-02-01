import React from "react";
import "./Navbar.css";
import {
  GoX,
  GoRepo,
  GoMail,
  GoThreeBars,
  GoIssueOpened,
  GoHome,
} from "react-icons/go";

const Navbar = () => {
  const handleClick = (btn) => {
    const url = "./" + btn + ".js";
    <link to={url} />;
    console.log(url);
    return;
  };
  return (
    <>
      <button className="homeNav-btn">Home</button>
      <button className="aboutNav-btn" onClick={() => handleClick("About")}>
        About
      </button>
      <button className="contactNav-btn">Contact</button>
      <button className="projectNav-btn">Projects</button>
      <button className="burgerNav-btn " hidden>
        <GoThreeBars />
      </button>
    </>
  );
};

export default Navbar;
