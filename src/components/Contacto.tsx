import { useContext } from "react";
import { deskTop, rotate, setHoverLink } from "../types/Types";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";
import LanguageContext from "../context/EnglishContext";

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
    <div className="main-wrapper">
      <section className="picture-container">
        <div className="contacto-picture">
          {language === "ES" ? (
            <div
              ref={contact}
              className={
                contactInView
                  ? "contacto-container in-view"
                  : "contacto-container"
              }
            >
              <div className="contacto-heading">
                <h2>Contacto</h2>
              </div>
              <ul className="info-container">
                <li className="info-item">
                  <span>
                    <strong>Whatsapp:</strong> +57 3132105286
                  </span>
                </li>
                <li className="info-item">
                  <span>
                    <strong>Teléfono:</strong> 601 8964576
                  </span>
                </li>
                <li className="info-item">
                  <span>
                    <strong>Direccíon:</strong> cra 18 # 140-33 Barrio Alcala,
                    Bogota DC, Colombia
                  </span>
                </li>
              </ul>
              <ul className="contacto-social">
                <li className="info-item">
                  <Link
                    onMouseEnter={() => {
                      props.setHoverLink(true);
                    }}
                    onMouseLeave={() => {
                      props.setHoverLink(false);
                    }}
                    target="_blanket"
                    to={"https://www.instagram.com/greenrootscolombia/"}
                  >
                    Instagram
                  </Link>
                </li>
                <li className="info-item">
                  <Link
                    onMouseEnter={() => {
                      props.setHoverLink(true);
                    }}
                    onMouseLeave={() => {
                      props.setHoverLink(false);
                    }}
                    target="_blank"
                    to={"https://www.instagram.com/greenrootscolombia/"}
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div
              ref={contact}
              className={
                contactInView
                  ? "contacto-container in-view"
                  : "contacto-container"
              }
            >
              <div className="contacto-heading">
                <h2>Contact</h2>
              </div>
              <ul className="info-container">
                <li className="info-item">
                  <span>
                    <strong>Whatsapp:</strong> +57 3132105286
                  </span>
                </li>
                <li className="info-item">
                  <span>
                    <strong>Tel:</strong> 601 8964576
                  </span>
                </li>
                <li className="info-item">
                  <span>
                    <strong>Address:</strong> cra 18 # 140-33 Barrio Alcala,
                    Bogota DC, Colombia
                  </span>
                </li>
              </ul>
              <ul className="contacto-social">
                <li className="info-item">
                  <Link
                    target="_blank"
                    to={"https://www.instagram.com/greenrootscolombia/"}
                  >
                    Instagram
                  </Link>
                </li>
                <li className="info-item">
                  <Link
                    target="_blank"
                    to={"https://www.instagram.com/greenrootscolombia/"}
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Contacto;
