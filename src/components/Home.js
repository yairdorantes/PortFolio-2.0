import "./styles/home.css";
import linkedin from "./media/linkedin.png";
import github from "./media/github2.png";
import halo from "./media/halo2.jpg";
// import svg from "./media/blob.svg";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

const Home = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <div className="container-home">
        <div className="container-all-mine">
          <div className="container-social-media-work">
            <div>
              <img className="social-media-work" src={linkedin} alt="" />
            </div>
            <div>
              <img className="social-media-work" src={github} alt="" />
            </div>
          </div>
          <div className="container-text-image-home">
            <div className="container-mine">
              <div className="greeting">{texts.greeting}</div>
              <div className="position">
                <strong>{texts.position}</strong>
              </div>
              <p className="my-description">{texts.master}</p>
              <button className="btn-contact-me">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>{texts.btnContact}</span>
              </button>
            </div>
          </div>
          <div className="headshot headshot-2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
