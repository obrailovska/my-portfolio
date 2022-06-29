import React from "react";
import "./footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Olha Brailovska
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://github.com/obrailovska">
          <AiOutlineLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/olha-brailovska-24a868226/">
          <AiFillGithub />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Olha Brailovska. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
