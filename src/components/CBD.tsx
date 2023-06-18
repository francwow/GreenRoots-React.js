import { deskTop, rotate, setHoverLink } from "../types/Types";
import Footer from "./Footer";

type CBD = {
  rotate: rotate;
  deskTop: deskTop;
  setHoverLink: setHoverLink;
};

const CBD = (props: CBD) => {
  const { rotate, setHoverLink, deskTop } = props;

  return (
    <div className="main-wrapper">
      <section className="picture-container">
        <div className="cbd-picture">
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

export default CBD;
