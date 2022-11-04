import { useContext, useEffect, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import "./styles/menu.css";
import mx from "./media/mexico.png";
import eua from "./media/eua.png";
const Menu = () => {
  const [lang, setLang] = useState("es");
  const { texts, handleLanguage } = useContext(LanguageContext);
  const changeLanguage = () => {
    console.log(lang);
    lang === "es" ? setLang("en") : setLang("es");
    handleLanguage(lang);
  };

  useEffect(() => {
    changeLanguage();
  }, []);

  return (
    <>
      <div className="container-menu-portfolio">
        <div className="my-name-menu">
          <strong>Yair</strong>
        </div>
        <div className="menu-options">
          <div>{texts.home}</div>
          <div>{texts.skills}</div>
          <div>{texts.portfolio}</div>
          <div>{texts.about}</div>
          <div onClick={changeLanguage}>
            <img
              className="flag-language"
              src={lang === "es" ? eua : mx}
              alt=""
            />
          </div>
          {/* <div>
            <img src={eua} alt="" />
          </div> */}
          <hr />
          {/* <h2>jaaj</h2> */}
        </div>
        {/* <hr /> */}
      </div>
      {/* <div>jaaj</div> */}
    </>
  );
};

export default Menu;
