import { deskTop, rotate, setHoverLink } from "../types/Types";
import Carousel from "./Carousel";
import TiendaIcons from "./TiendaIcons";
import Footer from "./Footer";

type Tienda = {
  rotate: rotate;
  setHoverLink: setHoverLink;
  deskTop: deskTop;
};

const Tienda = (props: Tienda) => {
  const { rotate, setHoverLink, deskTop } = props;

  return (
    <div className="main-wrapper">
      <section className="picture-container">
        <div className="tienda-picture">
          <div
            style={{ transform: `rotateZ(${rotate}deg)` }}
            className="left-dec"
          ></div>
          <div
            style={{ transform: `rotate(-${rotate}deg)` }}
            className="right-dec"
          ></div>
        </div>
      </section>
      <section className="section-container">
        <div className="tienda-copy-container">
          <div className="copy-background-one"></div>
          <div className="copy-background-two"></div>
          <div className="tienda-copy">
            {" "}
            <h2>Ofrecemos productos 100% naturales y 100% colombianos.</h2>
            <p>
              Green Roots ofrece productos totalmente naturales, creados a base
              de CBD y sin químicos. Al comprar nuestros productos estás
              ayudando a reducir tu propia huella de CO2 ya que somos una
              empresa{" "}
            </p>
          </div>
        </div>
        <div className="carousel-wrapper">
          <TiendaIcons />
          <Carousel setHoverLink={setHoverLink} deskTop={deskTop} />
        </div>
      </section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Tienda;
