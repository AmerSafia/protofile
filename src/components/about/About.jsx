import "./about.css";
import ME from "../../assets/me-about.jpg";
import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="About__icon" />
              <h5>Experiance</h5>
              <small>1+ years Working</small>
            </article>
            <article className="about__card">
              <FaAward className="About__icon" />
              <h5>Experiance</h5>
              <small>1+ years Working</small>
            </article>
            <article className="about__card">
              <FaAward className="About__icon" />
              <h5>Experiance</h5>
              <small>1+ years Working</small>
            </article>
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
