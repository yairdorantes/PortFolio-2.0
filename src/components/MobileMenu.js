import { useContext, useState } from "react";
import "./styles/mobileMenu.css";
import mx from "./media/mexico.png";
import eua from "./media/eua.png";
import menu from "./media/menu.png";
import skills from "./media/skills2.png";
import portfolio from "./media/portfolio.png";
import home from "./media/home.png";
import about from "./media/profile.png";
import LanguageContext from "../context/LanguageContext";
const MobileMenu = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);
  const [lang, setLang] = useState("es");
  const [isHide, setIsHide] = useState(true);

  const changeLanguage = () => {
    console.log(lang);
    lang === "es" ? setLang("en") : setLang("es");
    handleLanguage(lang);
  };

  const handleMenuBar = () => {
    isHide ? setIsHide(false) : setIsHide(true);
  };
  return (
    <>
      <div
        className={isHide ? "container-all-menus-mobile" : "hide-menu-mobile"}
      >
        <div>
          <img style={{ width: "25px" }} src={home} alt="" />
          <div>{texts.home}</div>
        </div>
        <div>
          <img style={{ width: "25px" }} src={skills} alt="" />
          <div>{texts.skills}</div>
        </div>
        <div>
          <img style={{ width: "25px" }} src={portfolio} alt="" />
          <div>{texts.portfolio}</div>
        </div>
        <div>
          <img style={{ width: "25px" }} src={about} alt="" />
          <div>{texts.about}</div>
        </div>
      </div>
      <div className="container-mobile-menu">
        <div className="name-mobile-menu">
          <strong>Yair</strong>
        </div>
        <div className="sub-options-menu-mobile">
          <div className="mobile-sub-icons">
            <img
              onClick={changeLanguage}
              className="flag-language"
              src={lang === "es" ? eua : mx}
              alt=""
            />
            <img
              onClick={handleMenuBar}
              className={"menu-icon-mobile"}
              src={menu}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
