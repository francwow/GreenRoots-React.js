import { useContext } from "react";
import { deskTop, rotate, setHoverLink } from "../types/Types";
import { useInView } from "react-intersection-observer";
import { InfoEn, InfoEs } from "./ContactoInfo";
import Footer from "./Footer";
import LanguageContext from "../context/EnglishContext";
import ContactForm from "./ContactForm";

type Contacto = {
  deskTop: deskTop;
  rotate: rotate;
  setHoverLink: setHoverLink;
};

const Contacto = (props: Contacto) => {
  const { ref: contact, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { deskTop, rotate, setHoverLink } = props;
  const language = useContext(LanguageContext);

  return (
    <div style={{ backgroundColor: "white" }} className="main-wrapper">
      {/* <section className="picture-container">
        <div className="contacto-picture">
          <div className="main-header-wrapper">
            {language === "ES" ? (
              <h1 className="main-header">Contacto</h1>
            ) : (
              <h1 className="main-header">Contact</h1>
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
      </section> */}
      <section className="section-container">
        <div className="contacto-wrapper">
          <ContactForm setHoverLink={setHoverLink} />
          <div className="contacto-info-container">
            {language === "ES" ? (
              <InfoEs
                contact={contact}
                contactInView={contactInView}
                setHoverLink={setHoverLink}
              />
            ) : (
              <InfoEn
                contact={contact}
                contactInView={contactInView}
                setHoverLink={setHoverLink}
              />
            )}
          </div>
        </div>
      </section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Contacto;
