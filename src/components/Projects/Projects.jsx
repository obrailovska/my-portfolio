import React, { useEffect } from "react";
import "./projects.css";
import Airport from "../../assets/projects/airport-info-search.png";
import Budget from "../../assets/projects/budget-tracker.jpg";
import IMS from "../../assets/projects/ims.jpg";
import PetStore from "../../assets/projects/petstore.png";
import Password from "../../assets/projects/password.png";
import RunBuddy from "../../assets/projects/run-buddy.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image: Budget,
    title: "Budget-Tracker",
    github: "https://github.com/obrailovska/Budget-Tracker",
    demo: "https://protected-peak-09794.herokuapp.com/",
  },
  {
    id: 2,
    image: IMS,
    title: "Inventrory Management System",
    github: "https://github.com/obrailovska/IMS",
    demo: "https://ims-inventory-s.herokuapp.com/",
  },
  {
    id: 3,
    image: Airport,
    title: "Flight Search",
    github: "https://github.com/obrailovska/Flight-Search",
    demo: "https://user-images.githubusercontent.com/95880256/153761117-8ce99a2f-8d7c-4b51-a0e9-2d2529df7872.gif",
  },
  {
    id: 4,
    image: PetStore,
    title: "ProPet - Pet Store",
    github: "https://github.com/obrailovska/pet-supplies-store",
    demo: "https://afternoon-spire-43659.herokuapp.com/",
  },
  {
    id: 5,
    image: Password,
    title: "Password Generator",
    github: "https://github.com/obrailovska/password-generator",
    demo: "https://obrailovska.github.io/password-generator/index.html",
  },
  {
    id: 6,
    image: RunBuddy,
    title: "Run Buddy",
    github: "https://github.com/obrailovska/run-buddy",
    demo: "https://obrailovska.github.io/run-buddy/",
  },
];
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="flip-left" id="projects">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} id="git-btn" className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
