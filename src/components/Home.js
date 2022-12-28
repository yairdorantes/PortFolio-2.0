import "./styles/home.css";
import linkedin from "./media/linkedin.png";
import github from "./media/github.png";
import crossout from "./media/crossout.png";
import LanguageContext from "../context/LanguageContext";
import { useContext, useState } from "react";
import Modal from "react-modal";
import OutsideClickHandler from "react-outside-click-handler";
import face from "./media/master.jpg";
const customStyles = {
  content: {
    color: "white",
    width: "350px",
    height: "443px",
    backgroundColor: "rgb(19, 23, 44)",
    outline: "none",

    overflow: "auto",
    borderRadius: "8px",
  },
  overlay: { zIndex: 999, backgroundColor: "#000000a7" },
};
const Home = () => {
  const { texts } = useContext(LanguageContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [spin, setSpin] = useState(false);
  const openModal = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  };
  const hideModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Modal
        className="modal-window"
        ariaHideApp={false}
        style={customStyles}
        isOpen={modalIsOpen}
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            hideModal();
          }}
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
                <input
                  name="name"
                  placeholder={texts.placeName + "..."}
                ></input>
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
        </OutsideClickHandler>
      </Modal>
      <section id="home">
        <div className="flex flex-col gap-4 items-center mt-[61px] lg:mt-[77px]">
          <div className="text-green-300 text-4xl font-extrabold mt-8">
            {texts.greeting}
          </div>

          <div className="font-medium text-2xl">{texts.position}</div>

          <p className="text-gray-300 w-3/4 text-center lg:w-[400px]">
            {texts.master}
          </p>
          <div className="avatar mt-5">
            <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={face} />
            </div>
          </div>
          <div className="container-social-media-work mt-10">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yair-dorantes-25a74a1a8/"
            >
              <img className="social-media-work" src={linkedin} alt="" />
            </a>

            <a target="_blank" href="https://github.com/yairdorantes">
              <img className="social-media-work" src={github} alt="" />
            </a>
          </div>
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
        </div>
      </section>
    </>
  );
};

export default Home;
