import { deskTop, rotate, setHoverLink } from "../types/Types";
import Carousel from "./Carousel";
import TiendaIcons from "./TiendaIcons";
import Footer from "./Footer";
import { TiendaCopy, TiendaCopy2 } from "./TiendaCopy";
import { useContext } from "react";
import LanguageContext from "../context/EnglishContext";
import Whatsapp from "./Whatsapp";

type Tienda = {
  rotate: rotate;
  setHoverLink: setHoverLink;
  deskTop: deskTop;
};

const Tienda = (props: Tienda) => {
  const { rotate, setHoverLink, deskTop } = props;
  const language = useContext(LanguageContext);

  return (
    <div style={{ backgroundColor: "white" }} className="main-wrapper">
      <Whatsapp setHoverLink={setHoverLink} />
      <section className="picture-container">
        <div className="tienda-picture">
          <div className="main-header-wrapper">
            {language === "ES" ? (
              <h1 className="main-header">
                Productos de CBD, para paz y tranquilidad.
              </h1>
            ) : (
              <h1 className="main-header">
                CBD products, for peace and tranquillity.
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
        <div className="tienda-container">
          <TiendaCopy />
          <div className="carousel-wrapper">
            <Carousel setHoverLink={setHoverLink} deskTop={deskTop} />
          </div>
          <TiendaCopy2 />
          <TiendaIcons />
        </div>
      </section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Tienda;
