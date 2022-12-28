import { useContext, useEffect, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import "./styles/nav-bar.css";
import mx from "./media/mexico.png";
import eua from "./media/eua.png";
import pdf from "./media/yair.pdf";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const [lang, setLang] = useState("es");
  const [link, setLink] = useState(0);
  const handleShowLinks = () => {
    show ? setShow(false) : setShow(true);
  };
  const changeLanguage = () => {
    // console.log(lang);
    lang === "es" ? setLang("en") : setLang("es");
    handleLanguage(lang);
  };

  useEffect(() => {
    changeLanguage();
  }, []);
  return (
    <div>
      <div>
        <nav className="nav-bar">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="w-[100px]">
              <img
                //   style={{ width: "50px" }}
                onClick={changeLanguage}
                src={lang === "es" ? eua : mx}
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
            </div>

            <div className="flex md:order-2 ">
              <a href={pdf} target="_blank">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {texts.resume}
                </button>
              </a>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                onClick={handleShowLinks}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={show ? "sub-menus" : "sub-menus-hidden"}
              id="navbar-sticky"
            >
              <ul className="nav-mns">
                <li id={0} onClick={() => setLink(0)}>
                  <a
                    onClick={handleShowLinks}
                    href="#"
                    id="1"
                    className={link === 0 ? "menu-selected" : "link-txt"}
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li onClick={handleShowLinks}>
                  <a
                    href="#skills"
                    id={1}
                    onClick={() => setLink(1)}
                    className={link === 1 ? "menu-selected" : "link-txt"}
                  >
                    {texts.skills}
                  </a>
                </li>
                <li onClick={handleShowLinks}>
                  <a
                    onClick={() => setLink(2)}
                    className={link === 2 ? "menu-selected" : "link-txt"}
                    href="#portfolio"
                  >
                    {texts.portfolio}
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="link-txt">
                    Contactame
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
