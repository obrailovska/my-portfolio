import React from "react";
import "./about.css";
import ME from "../../assets/avatar/me2.jpg";
import { MdComputer } from "react-icons/md";
import { TiSocialFlickr } from "react-icons/ti";
import { MdOutlineLanguage } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="about image"></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdComputer className="about_icon" />
              <h2> 1+ year</h2>
              <small>
                in web development HTML, CSS, JavaScript, MERN, MySql
              </small>
            </article>
            <article className="about_card">
              <TiSocialFlickr className="about_icon" />

              <h2> 3+ years</h2>
              <small>in social media management and content creation</small>
            </article>
            <article className="about_card">
              <MdOutlineLanguage className="about_icon" />
              <h2>Languages</h2>
              <small>
                <li> English</li>
                <li>Ukrainian</li>
                <li>Russian</li>
              </small>
            </article>
          </div>
          <p>
            Front-end developer leveraging background in Music Art to create
            great user experiences on the web and provide best design solutions.
            Recently earned a certificate in full stack development from
            University of Central Florida. Known as a self-driven, committed and
            always excited to learn individual. Looking forward to leverage all
            learned skills in the future as a part of a quality-driven team to
            build better experiences for the users.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
