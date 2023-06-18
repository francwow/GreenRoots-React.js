import { deskTop, rotate, setHoverLink } from "../types/Types";
import Footer from "./Footer";

type Nosotros = {
  rotate: rotate;
  setHoverLink: setHoverLink;
  deskTop: deskTop;
};

const Nosotros = (props: Nosotros) => {
  const { deskTop, setHoverLink, rotate } = props;

  return (
    <div className="main-wrapper">
      <section className="picture-container">
        <div className="nosotros-picture">
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
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Nosotros;
