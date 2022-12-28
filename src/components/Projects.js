import "./styles/projects.css";
import html from "./media/html.png";
import css from "./media/css.png";
import js from "./media/js.png";
import react from "./media/react.png";
import python from "./media/python.png";
import django from "./media/django.png";
import urls from "./media/url.png";
import github from "./media/github.png";
import tictac from "./media/projects/tictac.mkv";
import engl from "./media/projects/eng.mp4";
import gyms from "./media/projects/gym.mp4";
import flappy from "./media/projects/flappy.mkv";
import trivia from "./media/projects/trivia.webm";
import weather from "./media/projects/weather.png";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";
// import { text } from "@fortawesome/fontawesome-svg-core";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  const { texts } = useContext(LanguageContext);
  const myProjects = [
    {
      title: texts.englishApp,
      video: engl,
      url: "https://symptomatic-cent-production.up.railway.app/menu",
      github: "https://github.com/yairdorantes/EnglishApp",
      technologies: [react, django],
      color: "yellow",
    },
    {
      title: texts.gym,
      video: gyms,
      url: "https://web-production-65ef.up.railway.app/home/",
      github: "https://github.com/yairdorantes/myGym",
      technologies: [django],
      color: "green",
    },
    {
      title: texts.weatherApp,
      image: weather,
      url: "https://github.com/yairdorantes/WeatherApp",
      github: "https://github.com/yairdorantes/WeatherApp",
      technologies: [html, css, js],
      color: "#00ffcc",
    },
    {
      title: "Trivia",
      video: trivia,
      url: "www.example.com",
      github: "https://github.com/yairdorantes/Trivia",
      technologies: [html, css, js],
      color: "#656090",
    },
    {
      title: "TicTacToe",
      video: tictac,
      url: "www.example.com",
      github: "https://github.com/yairdorantes/Tic-Tac-Toe",
      technologies: [html, css, js],
      color: "white",
    },
    {
      title: "Flappy Bird",
      video: flappy,
      url: "www.example.com",
      github: "https://github.com/yairdorantes/MyFlappyBird",
      technologies: [html, css, js],
      color: "#35B4DF",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBox = () => {
    auto ? setAuto(false) : setAuto(true);
  };
  return (
    <>
      <section id="portfolio" className="pt-[40px] pb-[300px]">
        <div className="titles mt-24">{texts.portfolio}</div>
        <div className="sub-titles">{texts.titleProjects}</div>
        {/* <div>{auto.toString()}</div> */}

        {windowWidth < 1201 ? (
          <>
            {/* <div className=" w-[80px] m-5">
              <label for="option1" className="text-sm">
                AutoSlide
              </label>
              <input
                type="checkbox"
                checked={auto}
                id="option1"
                name="option1"
                value="value1"
                onChange={handleBox}
              />
            </div> */}

            <Swiper
              slidesPerView={1}
              spaceBetween={1}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                type: "bullets",
              }}
              loop={true}
              autoplay={
                auto
                  ? {
                      delay: 5000,
                      disableOnInteraction: false,
                    }
                  : null
              }
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="swiper"
            >
              {myProjects.map((project, key) => {
                return (
                  <SwiperSlide
                    key={key}
                    className="flex justify-center mb-[10px]"
                  >
                    <div className="max-w-sm w-[300px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      {project.video ? (
                        <video
                          className=" "
                          loop
                          autoPlay
                          muted
                          src={project.video}
                        ></video>
                      ) : (
                        <img
                          className="rounded-t-lg"
                          src={project.image}
                          alt=""
                        />
                      )}

                      <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {project.title}
                        </h5>

                        <a
                          target="_blank"
                          href={project.github}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Repo
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        ) : (
          <div className="flex flex-wrap gap-5 justify-center">
            {myProjects.map((project, key) => {
              return (
                <div
                  key={key}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    {project.video ? (
                      <video
                        className=" "
                        loop
                        autoPlay
                        muted
                        src={project.video}
                      ></video>
                    ) : (
                      <img
                        className="rounded-t-lg"
                        src={project.image}
                        alt=""
                      />
                    )}
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.title}
                      </h5>
                    </a>
                    {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p> */}
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Repo
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
