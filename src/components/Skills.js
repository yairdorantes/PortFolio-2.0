import "./styles/skills.css";
import python from "./media/python.png";
import js from "./media/js.png";
import ts from "./media/typescript.png";

import django from "./media/django.png";
import html from "./media/html.png";
import css from "./media/css.png";
import sass from "./media/sass.png";
import reacts from "./media/react.png";
import git from "./media/git.png";
import github from "./media/github-.png";
import tailwind from "./media/tailwind.png";
import nodejs from "./media/nodejs.png";
import sql from "./media/sql.png";
import json from "./media/json.png";
import LanguageContext from "../context/LanguageContext";
import { useContext, useEffect, useState } from "react";
import pdf from "./media/yair.pdf";

const skills = [
  { name: "html", image: html },
  { name: "css", image: css },
  { name: "sass", image: sass },
  { name: "tailwind", image: tailwind },
  { name: "javascript", image: js },
  { name: "react", image: reacts },
  { name: "nodejs", image: nodejs },
  { name: "python", image: python },
  { name: "django", image: django },
  { name: "git", image: git },
  { name: "github", image: github },
];

const Skills = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <section id="skills" className="pt-[95px]">
        <div className="text-center font-bold text-4xl text-cyan-300">
          {texts.skills}
        </div>
        <p className="text-center py-2 text-gray-300">{texts.skillSubtitle}</p>
        <div className="flex mt-12 flex-wrap gap-5 w-full justify-center sm:w-3/6 mx-auto ">
          {skills &&
            skills.map((skill, key) => {
              return (
                <div
                  key={key}
                  className="container flex gap-3 flex-col justify-center items-center rounded-[3px] p-5 bg-[#171717] w-[145px] h-[150px] "
                >
                  <img src={skill.image} alt="" className="w-3/4" />
                  <div className="text-white font-semibold uppercase">
                    {skill.name}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Skills;
