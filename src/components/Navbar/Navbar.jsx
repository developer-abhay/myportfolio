import React, { useEffect, useState } from "react";
import "./Navbar.css";
import myPic from "../../assets/myLogo.jpg";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const showNavMenu = async () => {
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    bar1.classList.toggle("close");
    bar2.classList.toggle("close");

    const aboutSection = document.getElementById("about-normal-view");

    aboutSection.classList.toggle("slide");
    setToggleNav((prev) => !prev);
  };

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [toggleNav]);

  return (
    <div id="nav">
      <div className="toggle-icon" onClick={showNavMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
      </div>

      <a
        className="logo"
        href="https://github.com/developer-abhay"
        target="_blank"
      >
        <img src={myPic} alt="" />
      </a>

      <Socials />
    </div>
  );
};

export default Navbar;

function Socials() {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/abhay-sharma-5907bb22b/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/developer-abhay"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/asliabhay/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.instagram.com/asliabhay/"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitterX />
      </a>
    </div>
  );
}
