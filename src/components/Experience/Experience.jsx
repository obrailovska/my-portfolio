import React, { useEffect } from "react";
import "./experience.css";
import { CgCheckO } from "react-icons/cg";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-fe">
          <h3>Front-End Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>React.js</h4>
            </article>
          </div>
        </div>
        <div className="experience-be">
          <h3>Back-End Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience-details">
              <CgCheckO className="experience-icon" />
              <h4>MySQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
