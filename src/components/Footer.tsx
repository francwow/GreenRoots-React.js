import { deskTop, setHoverLink, setMenuActive } from "../types/Types";
import { navItems } from "../data/navItems";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Social from "./Social";
import { useContext } from "react";
import LanguageContext from "../context/EnglishContext";

type Footer = {
  deskTop: deskTop;
  setHoverLink: setHoverLink;
};

const Footer = (props: Footer) => {
  const language = useContext(LanguageContext);
  const { deskTop, setHoverLink } = props;

  return (
    <div className="footer-wrapper">
      <Logo />
      <div className="footer-info">
        <ul className="info-container">
          <li className="info-item">
            <span>+57 3132105286</span>
          </li>
          <li className="info-item">
            <span>601 8964576</span>
          </li>
          <li className="info-item">
            <span>cra 18 # 140-33 Barrio Alcala, Bogota DC, Colombia</span>
          </li>
        </ul>
        <ul className="footer-nav">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                style={{ animationDelay: `${index / 7}s` }}
                className="footer-nav-item"
              >
                <Link
                  onMouseEnter={() => {
                    props.setHoverLink(true);
                  }}
                  onMouseLeave={() => {
                    props.setHoverLink(false);
                  }}
                  to={item.href}
                >
                  {language === "ES" ? item.nameES : item.nameEN}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Social setHoverLink={setHoverLink} />
    </div>
  );
};

export default Footer;
