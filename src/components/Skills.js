import "./styles/skills.css";
import python from "./media/python.png";
import js from "./media/js.png";
import django from "./media/django.png";
import html from "./media/html.png";
import css from "./media/css.png";
import reacts from "./media/react.png";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";
const Skills = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <>
      <section className="skill-section">
        <div className="container-skill-titles">
          <div className="skill-title">{texts.skills}</div>
          <div>{texts.skillSubtitle}</div>
        </div>
        <div className="container-skills">
          <div id="html" className="skill">
            <img className="skill-icon" src={html} alt="" />
          </div>
          <div id="css" className="skill">
            <img className="skill-icon" src={css} alt="" />
          </div>
          <div id="js" className="skill">
            <img className="skill-icon" src={js} alt="" />
          </div>
          <div id="react" className="skill">
            <img className="skill-icon react" src={reacts} alt="" />
          </div>
          <div id="python" className="skill">
            <img className="skill-icon" src={python} alt="" />
          </div>
          <div id="django" className="skill">
            <img className="skill-icon" src={django} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
