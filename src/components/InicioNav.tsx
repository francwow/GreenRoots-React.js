import { useContext } from "react";
import { Link } from "react-router-dom";
import { InicioNavItems } from "../data/navItems";
import { setHoverLink } from "../types/Types";
import LanguageContext from "../context/EnglishContext";

type InicioNav = {
  setHoverLink: setHoverLink;
};

const InicioNav = (props: InicioNav) => {
  const language = useContext(LanguageContext);

  return (
    <div className="inicio-nav-container">
      <ul className="inicio-nav">
        {InicioNavItems.map((item, index) => {
          return (
            <li
              key={language === "ES" ? item.nameES : item.nameEN}
              style={{ animationDelay: `${index / 7}s` }}
              className="inicio-list-item"
            >
              <Link
                onMouseEnter={() => {
                  props.setHoverLink(true);
                }}
                onMouseLeave={() => {
                  props.setHoverLink(false);
                }}
                to={item.href}
                onClick={() => {
                  props.setHoverLink(false);
                }}
              >
                {language === "ES" ? item.nameES : item.nameEN}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InicioNav;
