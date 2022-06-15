import React from "react";
import Resume from "./Resume";
import "./header.css";
import ME from "../../assets/avatar/avatar.png";
import Socials from "../Header/Socials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Olha Brailovska</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Resume />
        <Socials />

        <div className="me">
          <img src={ME} alt="Olha Brailovska" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
