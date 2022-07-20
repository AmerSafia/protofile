import "./about.css";
import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const aboutDetails = [
  {
    title: "Experiance",
    icon: <FaAward className="about__icon" />,
    details: "1+ year Working",
  },
  {
    title: "Clients",
    icon: <FiUsers className="about__icon" />,
    details: "5+Worldwide",
  },
  {
    title: "Projects",
    icon: <VscFolderLibrary className="about__icon" />,
    details: "10+Completed",
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src='./assets/me-about.jpg' alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {aboutDetails.map((card) => {
              return (
                <article className="about__card">
                  {card.icon}
                  <h5>{card.title}</h5>
                  <small style={{ fontSize: "0.7rem" }}>{card.details}</small>
                </article>
              );
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas
            corrupti reiciendis harum asperiores ullam ipsum cupiditate fugiat
            nam quae possimus, quia labore distinctio nostrum recusandae
            incidunt laudantium qui ea?
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
