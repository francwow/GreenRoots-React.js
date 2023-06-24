import { useContext } from "react";
import { deskTop, rotate, setHoverLink } from "../types/Types";
import { useInView } from "react-intersection-observer";
import { InfoEn, InfoEs } from "./ContactoInfo";
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
      </section>
      <Footer deskTop={deskTop} setHoverLink={setHoverLink} />
    </div>
  );
};

export default Contacto;
