import "./experience.css";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const experianceLangFront = [
  { lang: "Html", experiance: "Experianced" },
  { lang: "Css", experiance: "Experianced" },
  { lang: "JavaScript", experiance: "Experianced" },
  { lang: "VueJS", experiance: "intermediate" },
  { lang: "ReactJS", experiance: "intermediate" },
  { lang: "Sass", experiance: "intermediate" },
  { lang: "pug", experiance: "Basic" },
];

const experianceLangBack = [
  { lang: "NodeJS", experiance: "intermediate" },
  { lang: "MongoDB", experiance: "intermediate" },
  { lang: "php", experiance: "Basic" },
  { lang: "Firebase", experiance: "intermediate" },
  { lang: "NoSql", experiance: "Basic" },
  { lang: "MySql", experiance: "Basic" },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developmet</h3>
          <div className="experience__content">
            {experianceLangFront.map((lang) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{lang.lang}</h4>
                    <small className="text-light">{lang.experiance}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developmet</h3>
          <div className="experience__content">
            {experianceLangBack.map((lang) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{lang.lang}</h4>
                    <small className="text-light">{lang.experiance}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
