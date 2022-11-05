import "./styles/skills.css";
import python from "./media/python.png";
import js from "./media/js.png";
import django from "./media/django.png";
import html from "./media/html.png";
import css from "./media/css.png";
import reacts from "./media/react.png";
import git from "./media/git.png";
import github from "./media/github.png";
import sql from "./media/sql.png";
import json from "./media/json.png";
import cv from "./media/doc.png";
import LanguageContext from "../context/LanguageContext";
import { useContext, useEffect, useState } from "react";
const iconImage = [
  html,
  css,
  js,
  reacts,
  python,
  django,
  sql,
  json,
  git,
  github,
];

const Skills = () => {
  const [stateAnimation, setStateAnimation] = useState(0);
  const { texts } = useContext(LanguageContext);
  const moveIcons = () => {
    let cont = 0;

    const intervalo = setInterval(() => {
      cont++;
      if (cont > 9) {
        cont = 0;
      }
      setStateAnimation(cont);
    }, 1300);
  };
  useEffect(() => {
    moveIcons();
  }, []);

  return (
    <>
      <section className="section-top-skill">
        <section className="skill-section" id="skills-section">
          <div className="container-skill-titles">
            <div className={"skill-title"}>{texts.skills}</div>
            <div>{texts.skillSubtitle}</div>
          </div>
          <div className="container-skills">
            {iconImage.map((icon, key) => {
              return (
                <div key={key} className="skill">
                  <img
                    className={
                      stateAnimation === key ? "skill-icon move" : "skill-icon"
                    }
                    src={icon}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="container-btn-cv">
            <img className="cv" src={cv} alt="" />
            <button className="btn-cv">
              <strong>{texts.cv}</strong>
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
