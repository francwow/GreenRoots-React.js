import { useContext } from "react";
import { deskTop, rotate, setHoverLink } from "../types/Types";
import { DescOne, DescTwo, DescThree } from "./NosotrosInfo";
import nosotrosImg1 from "../assets/webpImages/nosotros1.webp";
import nosotrosImg2 from "../assets/webpImages/nosotros2.webp";
import Footer from "./Footer";
import LanguageContext from "../context/EnglishContext";
import { useInView } from "react-intersection-observer";
import CTA from "./CTA";
import Whatsapp from "./Whatsapp";

type Nosotros = {
  rotate: rotate;
  setHoverLink: setHoverLink;
  deskTop: deskTop;
};

const Nosotros = (props: Nosotros) => {
  const { ref: descImg, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: descImg2, inView: img2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { deskTop, setHoverLink, rotate } = props;
  const language = useContext(LanguageContext);

  return (
    <div style={{ backgroundColor: "white" }} className="main-wrapper">
      <Whatsapp setHoverLink={setHoverLink} />
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
            <DescOne />
            <div
              ref={descImg}
              className={imgInView ? "desc-img in-view" : "desc-img"}
            >
              <img
                className="nosotros-img-one"
                src={nosotrosImg2}
                alt="CBD products"
              />
            </div>
          </div>
          <div className="nosotros-desc secondary-desc">
            <div className="desc-info-container">
              <DescTwo />
              <DescThree />
            </div>
            <div
              ref={descImg2}
              className={img2InView ? "desc-img in-view" : "desc-img"}
            >
              <img
                className="nosotros-img-two"
                src={nosotrosImg1}
                alt="CBD farmer"
              />
            </div>
          </div>
          <CTA setHoverLink={setHoverLink} />
        </div>
      </section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Nosotros;
