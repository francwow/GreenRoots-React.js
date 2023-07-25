import { useContext } from "react";
import { deskTop, rotate, setHoverLink } from "../types/Types";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";
import LanguageContext from "../context/EnglishContext";
import { DescOne, DescTwo } from "./CBDInfo";
import cbdImg1 from "../assets/webpImages/cbd1.webp";
import cbdVideo from "../assets/videos/aceite.mp4";
import cbdImg2 from "../assets/webpImages/nosotros.webp";
import CTA from "./CTA";
import Whatsapp from "./Whatsapp";

type CBD = {
  rotate: rotate;
  deskTop: deskTop;
  setHoverLink: setHoverLink;
};

const CBD = (props: CBD) => {
  const { ref: descImg, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: descImg2, inView: img2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const language = useContext(LanguageContext);
  const { rotate, setHoverLink, deskTop } = props;

  return (
    <div style={{ backgroundColor: "white" }} className="main-wrapper">
      <Whatsapp setHoverLink={setHoverLink} />
      <section className="picture-container">
        <div className="cbd-picture">
          <div className="main-header-wrapper">
            {language === "ES" ? (
              <h1 className="main-header">¿Qué es el CBD?</h1>
            ) : (
              <h1 className="main-header">What is CBD?</h1>
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
        <div className="cbd-container">
          <div className="cbd-desc">
            <DescOne />
            <div
              ref={descImg}
              className={imgInView ? "desc-img in-view" : "desc-img"}
            >
              <figure className="cbd-video">
                <video muted loop autoPlay width={300}>
                  <source type="video/mp4" src={cbdVideo} />
                </video>
              </figure>
              {/* <img src={cbdImg1} alt="CBD products" /> */}
            </div>
          </div>
          <div className="cbd-desc secondary-cbd-desc">
            <DescTwo />
            <div
              ref={descImg2}
              className={img2InView ? "desc-img in-view" : "desc-img"}
            >
              <img src={cbdImg2} alt="CBD products" />
            </div>
          </div>
          <CTA setHoverLink={setHoverLink} />
        </div>
      </section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default CBD;
