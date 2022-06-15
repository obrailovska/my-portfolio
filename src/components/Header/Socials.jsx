import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/olha-brailovska-24a868226/"
        target="_blank"
      >
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com/obrailovska" target="_blank">
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Socials;
