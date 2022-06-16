import React from "react";
import { useState } from "react";
import "./navbar.css";
import { RiHome3Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiHome3Line />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMail />
      </a>
    </nav>
  );
};

export default NavBar;
