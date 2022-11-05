import { useContext, useEffect, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import "./styles/menu.css";
import mx from "./media/mexico.png";
import eua from "./media/eua.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useScrollDirection } from "react-use-scroll-direction";
const Menu = () => {
  const { isScrollingDown, scrollDirection } = useScrollDirection();
  const [lang, setLang] = useState("es");
  const [down, setDown] = useState(false);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const changeLanguage = () => {
    console.log(lang);
    lang === "es" ? setLang("en") : setLang("es");
    handleLanguage(lang);
  };

  useEffect(() => {
    changeLanguage();
  }, []);
  useEffect(() => {
    scrollDirection === "DOWN" && setDown(true);
    scrollDirection === "UP" && setDown(false);
  }, [scrollDirection]);

  return (
    <>
      {/* {isScrollingDown && setDown(true)} */}
      <div
        className="container-menu-portfolio"
        style={{ marginTop: down && "-10%" }}
      >
        <div className="my-name-menu">
          <strong>Yair</strong>
        </div>
        <div className="menu-options">
          <div>
            <AnchorLink className="container-link-portfolio" href="#home">
              {texts.home}
            </AnchorLink>
          </div>
          <div>
            <AnchorLink
              className="container-link-portfolio"
              href="#skills-section"
            >
              {texts.skills}
            </AnchorLink>
          </div>
          <div>
            <AnchorLink
              href="#section-portfolio"
              className="container-link-portfolio"
            >
              {texts.portfolio}
            </AnchorLink>
          </div>
          <div>{texts.about}</div>
          <div onClick={changeLanguage}>
            <img
              className="flag-language"
              src={lang === "es" ? eua : mx}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
