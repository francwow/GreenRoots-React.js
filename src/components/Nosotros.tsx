import { useContext } from "react";
import { deskTop, rotate, setHoverLink } from "../types/Types";
import { DescOneEn, DescOneEs } from "./NosotrosInfo";
import nosotrosImg1 from "../assets/webpImages/nosotros1.webp";
import nosotrosImg2 from "../assets/webpImages/nosotros2.webp";
import Footer from "./Footer";
import LanguageContext from "../context/EnglishContext";

type Nosotros = {
  rotate: rotate;
  setHoverLink: setHoverLink;
  deskTop: deskTop;
};

const Nosotros = (props: Nosotros) => {
  const { deskTop, setHoverLink, rotate } = props;
  const language = useContext(LanguageContext);

  return (
    <div className="main-wrapper">
      <section className="picture-container">
        <div className="nosotros-picture">
          <div className="main-header-wrapper">
            {language === "ES" ? (
              <h1 className="main-header">
                Green Roots, una marca comprometida con el planeta.
              </h1>
            ) : (
              <h1 className="main-header">
                Green Roots, a brand commited to the planet.
              </h1>
            )}
          </div>
          <div className="picture-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="white"
                fillOpacity="1"
                d="M0,160L120,154.7C240,149,480,139,720,138.7C960,139,1200,149,1320,154.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="section-container">
        <div className="nosotros-container">
          <div className="nosotros-desc">
            {language === "ES" ? <DescOneEs /> : <DescOneEn />}
            <div className="desc-img">
              <img src={nosotrosImg2} alt="CBD products" />
            </div>
          </div>
          <div className="nosotros-desc secondary-desc">
            <div className="desc-info-container">
              <div className="desc-info">
                <h2 className="desc-heading">Misión</h2>
                <p>
                  En Green Roots Colombia nos comprometemos a ofrecer productos
                  de alta calidad, creados a partir de fuentes naturales y
                  sostenibles con un enfoque de reducción del impacto ambiental
                  en el mediano plazo. Nuestra prioridad es ofrecer soluciones
                  amigables con el planeta que esten libres de maltrato animal,
                  brindando una experiencia de compra responsable, consciente y
                  con la certeza de que los productos no han sido tratados con
                  ningún tipo de pesticida, parabenos o producto químico.{" "}
                </p>
              </div>
              <div className="desc-info">
                <h2 className="desc-heading">Visión</h2>
                <p>
                  Green Roots Colombia se proyecta, para el año 2030, a ser la
                  empresa líder en la industria de productos artesanales con
                  cannabis (CBD), hechos a mano y libres de crueldad animal,
                  inspirando a otros a adoptar un enfoque sostenible y
                  responsable en la producción, consumo y disposición final de
                  los productos. Buscamos innovar y desarrollar productos que
                  han sido cultivados respetando los ritmos de la naturaleza sin
                  manipulación genética y proporcionando beneficios para el
                  medio ambiente y la comunidad.
                </p>
              </div>
            </div>
            <div className="desc-img">
              <img src={nosotrosImg1} alt="CBD farmer" />
            </div>
          </div>
        </div>
      </section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Nosotros;
