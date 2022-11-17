import "./styles/projects.css";
import html from "./media/html.png";
import css from "./media/css.png";
import js from "./media/js.png";
import react from "./media/react.png";
import python from "./media/python.png";
import django from "./media/django.png";
import github from "./media/github.png";
import tictac from "./media/projects/tictac.mkv";
import flappy from "./media/projects/flappy.mkv";
import trivia from "./media/projects/trivia.webm";
import weather from "./media/projects/weather.png";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";
// import { text } from "@fortawesome/fontawesome-svg-core";
const myProjects = [
  {
    title: "Clima app",
    image: weather,
    description: "Juego del gatito",
    url: "https://github.com/yairdorantes/WeatherApp",
    github: "https://github.com/yairdorantes/WeatherApp",
    technologies: [html, css, js],
    color: "#00ffcc",
  },
  {
    title: "Trivia",
    video: trivia,
    description: "juego de preguntas",
    url: "www.example.com",
    github: "https://github.com/yairdorantes/Trivia",
    technologies: [html, css, js],
    color: "#656090",
  },
  {
    title: "TicTacToe",
    video: tictac,
    description: "Juego del gatito",
    url: "www.example.com",
    github: "example.com",
    technologies: [html, css, js],
    color: "white",
  },
  {
    title: "Flappy Bird",
    video: flappy,
    description: "Version sencilla del juego flapppy bird",
    url: "www.example.com",
    github: "example.com",
    technologies: [html, css, js],
    color: "#35B4DF",
  },
];

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <section id="section-portfolio">
        <div className="title-projects">
          <div className="skill-title">{texts.portfolio}</div>
          <div>{texts.titleProjects}</div>
        </div>
        <div className="container-projects">
          {myProjects.map((project, key) => {
            return (
              <div key={key} className="container-video-card">
                {project.video ? (
                  <video
                    loop
                    autoPlay
                    muted
                    src={project.video}
                    style={{ boxShadow: `0 0 35px ${project.color}` }}
                  ></video>
                ) : (
                  <img
                    className="image-project"
                    style={{ boxShadow: `0 0 35px ${project.color}` }}
                    src={project.image}
                    alt=""
                  />
                )}
                <div className="text-card-video">
                  <div>
                    <h2>{project.title}</h2>
                  </div>
                  <div>
                    <p>{project.description}</p>
                  </div>
                  <div className="container-made-with">
                    <a href={project.github}>
                      <img
                        style={{ marginRight: "20px" }}
                        className="made-with"
                        src={github}
                        alt=""
                      />
                    </a>

                    {project.technologies.map((tech, key) => {
                      return (
                        <img
                          key={key}
                          className="made-with"
                          src={tech}
                          alt=""
                        />
                      );
                    })}
                  </div>
                  <a href={project.url} className="link-project">
                    Link
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
