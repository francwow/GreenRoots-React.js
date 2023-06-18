import { deskTop, rotate, setHoverLink } from "../types/Types";
import Footer from "./Footer";

type Contacto = {
  deskTop: deskTop;
  rotate: rotate;
  setHoverLink: setHoverLink;
};

const Contacto = (props: Contacto) => {
  const { deskTop, rotate, setHoverLink } = props;

  return (
    <div className="main-wrapper">
      <section className="picture-container">
        <div className="contacto-picture">
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
      <section className="section-container"></section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Contacto;
