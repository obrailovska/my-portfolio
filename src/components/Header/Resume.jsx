import React from "react";
import resume from "../../assets/resume.pdf";
const Resume = () => {
  return (
    <div className="resume">
      <a href={resume} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default Resume;
