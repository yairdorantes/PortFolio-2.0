import "./styles/home.css";
import linkedin from "./media/nowlink.png";
import github from "./media/github3.png";
import crossout from "./media/crossout.png";
import LanguageContext from "../context/LanguageContext";
import { useContext, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    color: "white",
    width: "350px",
    height: "443px",
    backgroundColor: "rgb(19, 23, 44)",
    outline: "none",
    borderRadius: "10px",
    overflow: "auto",
    borderRadius: "8px",
  },
  overlay: { zIndex: 999, backgroundColor: "#000000a7" },
};
const Home = () => {
  const { texts } = useContext(LanguageContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [spin, setSpin] = useState(false);
  const openModal = () => {
    if (modalIsOpen) {
      setModalIsOpen(false);
      setSpin(false);
    } else {
      setSpin(true);
      setModalIsOpen(true);
    }
  };

  return (
    <>
      <Modal
        className="modal-window"
        ariaHideApp={false}
        style={customStyles}
        isOpen={modalIsOpen}
      >
        <div className="container-form">
          <form
            action="https://formsubmit.co/yairmasterlol@gmail.com"
            method="POST"
            className="form"
          >
            <img
              className="tache"
              onClick={openModal}
              style={{ width: "25px", float: "right" }}
              src={crossout}
              alt=""
            />
            <h2 className="form-h2">{texts.btnContact}</h2>
            <p className="parrafo" type={texts.inputName + ":"}>
              <input name="name" placeholder={texts.placeName + "..."}></input>
            </p>
            <p className="parrafo" type="Email:">
              <input
                name="email"
                placeholder={texts.placeEmail + "..."}
              ></input>
            </p>
            <p className="parrafo" type={texts.inputMessage + ":"}>
              <input
                name="text"
                placeholder={texts.placeMessage + "..."}
              ></input>
            </p>
            <button type="submit" className="btn-form">
              <strong>{texts.btnSendMessage}</strong>
            </button>
          </form>
        </div>
      </Modal>
      <section id="home">
        <div className="container-home">
          <div className="container-all-mine">
            <div className="container-social-media-work">
              <div>
                <a href="https://www.linkedin.com/in/yair-dorantes-25a74a1a8/">
                  <img className="social-media-work" src={linkedin} alt="" />
                </a>
              </div>
              <div>
                <a href="https://github.com/yairdorantes">
                  <img className="social-media-work" src={github} alt="" />
                </a>
              </div>
            </div>
            <div className="container-text-image-home">
              <div className="container-mine">
                <div className="greeting">{texts.greeting}</div>
                <div className="position">
                  <strong>{texts.position}</strong>
                </div>
                <p className="my-description">{texts.master}</p>
                <button onClick={openModal} className="btn-contact-me">
                  <div className="svg-wrapper-1">
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
                  <span>{texts.btnContact}</span>
                </button>
                <div className="container-social-media-work2">
                  <div>
                    <a href="https://www.linkedin.com/in/yair-dorantes-25a74a1a8/">
                      <img
                        className="social-media-work2"
                        src={linkedin}
                        alt=""
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/yairdorantes">
                      <img className="social-media-work2" src={github} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="headshot headshot-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
