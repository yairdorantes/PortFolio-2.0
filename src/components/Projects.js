import "./styles/projects.css";
import html from "./media/html.png";
import css from "./media/css.png";
import js from "./media/js.png";
import react from "./media/react.png";
import python from "./media/python.png";
import django from "./media/django.png";
import tictac from "./media/projects/tictac.mkv";
import flappy from "./media/projects/flappy.mkv";
import trivia from "./media/projects/trivia.webm";
import weather from "./media/projects/weather.png";
const myProjects = [
  {
    title: "Clima app",
    image: weather,
    description: "Juego del gatito",
    url: "www.example.com",
    github: "example.com",
    technologies: [html, css, js],
  },
  {
    title: "Trivia",
    video: trivia,
    description: "juego de preguntas",
    url: "www.example.com",
    github: "example.com",
    technologies: [html, css, js],
  },
  {
    title: "TicTacToe",
    video: tictac,
    description: "Juego del gatito",
    url: "www.example.com",
    github: "example.com",
    technologies: [html, css, js],
  },
  {
    title: "Flappy Bird",
    video: flappy,
    description: "Version sencilla del juego flapppy bird",
    url: "www.example.com",
    github: "example.com",
    technologies: [html, css, js],
  },
];

const Projects = () => {
  return (
    <>
      <section id="section-portfolio">
        <div className="container-projects">
          {myProjects.map((project, key) => {
            return (
              <div key={key} className="container-video-card">
                {project.video ? (
                  <video loop autoPlay muted src={project.video}></video>
                ) : (
                  <img className="image-project" src={project.image} alt="" />
                )}
                <div className="text-card-video">
                  <div>
                    <h2>{project.title}</h2>
                  </div>
                  <div>
                    <p>{project.description}</p>
                  </div>
                  <div className="container-made-with">
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
                  <a href="">Link</a>
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
