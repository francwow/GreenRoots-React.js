import { deskTop, rotate, setHoverLink } from "../types/Types";
import Carousel from "./Carousel";
import TiendaIcons from "./TiendaIcons";

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
        <div className="carousel-wrapper">
          <TiendaIcons />
          <Carousel setHoverLink={setHoverLink} deskTop={deskTop} />
        </div>
      </section>
    </div>
  );
};

export default Tienda;
