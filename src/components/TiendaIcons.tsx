import { useContext } from "react";
import tiendaIcon1 from "../assets/webpImages/tienda-icon-01.webp";
import tiendaIcon2 from "../assets/webpImages/tienda-icon-02.webp";
import tiendaIcon3 from "../assets/webpImages/tienda-icon-03.webp";
import tiendaIcon4 from "../assets/webpImages/tienda-icon-04.webp";
import LanguageContext from "../context/EnglishContext";

const TiendaIcons = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="tienda-icons">
      <div className="tienda-icon">
        <img src={tiendaIcon1} alt="Icon" />
        <span>
          {language === "ES" ? "Ingredientes Naturales" : "Natural Ingredients"}
        </span>
      </div>
      <div className="tienda-icon">
        <img src={tiendaIcon2} alt="Icon" />
        <span>{language === "ES" ? "Cruelty Free" : "Cruelty-Free"}</span>
      </div>
      <div className="tienda-icon">
        <img src={tiendaIcon3} alt="Icon" />
        <span>{language === "ES" ? "Hecho a mano" : "Handmade"}</span>
      </div>
      <div className="tienda-icon">
        <img src={tiendaIcon4} alt="Icon" />
        <span>{language === "ES" ? "Libre de parabenos" : "Paraben-Free"}</span>
      </div>
    </div>
  );
};

export default TiendaIcons;
