import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const introEs =
  "Desarrollador web apasionado por innovar y resolver problemas en el entorno web";

// const introEs = "Desarrolla web";

const introEn =
  "Web developer passionate about innovating and solving problems in web enviroment";
const translations = {
  es: {
    home: "Inicio",
    skills: "Habilidades",
    portfolio: "Portafolio",
    about: "Sobre mí",
    greeting: "Hola, soy Yair",
    position: "Desarrollador Full Stack",
    master: introEs,
    btnContact: "Contactame",
    skillSubtitle: "Tecnologías con las que he trabajado",
    cv: "Ver / Descargar CV",
    inputName: "Nombre",
    placeName: "Escribe tu nombre aquí",
    placeEmail: "Correo electrónico de contacto",
    placeMessage: "Escribe tu mensaje",
    inputMessage: "Mensaje",
    btnSendMessage: "Enviar Mensaje",
    titleProjects: "Projectos que he hecho",
  },
  en: {
    home: "Home",
    skills: "Skills",
    portfolio: "Portfolio",
    about: "about",
    greeting: "Hi, i'm Yair",
    position: "Full Stack developer",
    master: introEn,
    btnContact: "Contact me",
    skillSubtitle: "Technologies I have worked with",
    cv: "See / Download CV",
    inputName: "Name",
    inputMessage: "Message",
    placeName: "Write your name here",
    placeEmail: "Contact email",
    placeMessage: "Write your message",
    btnSendMessage: "Send message",
    titleProjects: "Projects i've build",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (lang) => {
    if (lang === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
