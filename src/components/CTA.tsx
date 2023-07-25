import { useContext } from "react";
import LanguageContext from "../context/EnglishContext";
import { setHoverLink } from "../types/Types";
import { Link } from "react-router-dom";

type CTA = {
  setHoverLink: setHoverLink;
};

const CTA = ({ setHoverLink }: CTA) => {
  const language = useContext(LanguageContext);

  return (
    <div className="cta-container">
      <div className="heading-container">
        {language === "ES" ? (
          <h2 className="desc-heading">Conoce nuestros productos</h2>
        ) : (
          <h2 className="desc-heading">Take a look at our products</h2>
        )}
      </div>
      <div className="btn-container">
        <Link to={"/tienda"}>
          {language === "ES" ? (
            <button
              onMouseEnter={() => setHoverLink(true)}
              onMouseLeave={() => setHoverLink(false)}
              className="button"
            >
              TIENDA
            </button>
          ) : (
            <button
              onMouseEnter={() => setHoverLink(true)}
              onMouseLeave={() => setHoverLink(false)}
              className="button"
            >
              STORE
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default CTA;
