import { navItems } from "../data/navItems";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Social from "./Social";
import MenuActiveContext from "../context/menuActiveContext";
import { setHoverLink, setMenuActive } from "../types/Types";
import LanguageContext from "../context/EnglishContext";

type NavMenu = {
  setHoverLink: setHoverLink;
  setMenuActive: setMenuActive;
};

const NavMenu = (props: NavMenu) => {
  const { setHoverLink, setMenuActive } = props;
  const language = useContext(LanguageContext);
  const menuActive = useContext(MenuActiveContext);

  return (
    <>
      {menuActive ? (
        <div className="main-nav">
          <ul className="nav-container container-flex-column">
            {navItems.map((item, index) => {
              return (
                <li
                  key={language === "ES" ? item.nameES : item.nameEN}
                  style={{ animationDelay: `${index / 7}s` }}
                  className="nav-list-item"
                >
                  <Link
                    onMouseEnter={() => {
                      props.setHoverLink(true);
                    }}
                    onMouseLeave={() => {
                      props.setHoverLink(false);
                    }}
                    onClick={() => {
                      setMenuActive(false);
                      setHoverLink(false);
                    }}
                    to={item.href}
                  >
                    {language === "ES" ? item.nameES : item.nameEN}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Social setHoverLink={setHoverLink} />
        </div>
      ) : null}
    </>
  );
};

export default NavMenu;
