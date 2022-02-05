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
  return (
    <main>
      <ul>
        <li id="h-item">Home</li>
        <li id="a-item">About</li>
        <li id="c-item">Contact</li>
        <li id="p-item">Projects</li>
        <li id="hamburger-menu" className="hidden">
          <GoThreeBars />
        </li>
      </ul>
    </main>
  );
};

export default Navbar;
