import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import tiendaIcon1 from "../assets/webpImages/tienda-icon-01.webp";
import tiendaIcon2 from "../assets/webpImages/tienda-icon-02.webp";
import tiendaIcon3 from "../assets/webpImages/tienda-icon-03.webp";
import tiendaIcon4 from "../assets/webpImages/tienda-icon-04.webp";
import LanguageContext from "../context/EnglishContext";

const TiendaIcons = () => {
  const language = useContext(LanguageContext);
  const { ref: icons, inView: iconsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={icons}
      className={iconsInView ? "tienda-icons in-view" : "tienda-icons"}
    >
      {/* <div className="icons-background-one"></div>
      <div className="icons-background-two"></div> */}
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
