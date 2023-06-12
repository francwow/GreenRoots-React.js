import { navItems } from "../data/navItems";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Social from "./Social";
import MenuActiveContext from "../context/menuActiveContext";
import { setHoverLink, setMenuActive } from "../types/Types";

type NavMenu = {
  setHoverLink: setHoverLink;
  setMenuActive: setMenuActive;
};

const NavMenu = (props: NavMenu) => {
  const { setHoverLink, setMenuActive } = props;
  const menuActive = useContext(MenuActiveContext);

  return (
    <>
      {menuActive ? (
        <div className="mobile-nav">
          <ul className="nav-container container-flex-column">
            {navItems.map((item, index) => {
              return (
                <li
                  key={item.name}
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
                    onClick={() => setMenuActive(false)}
                    to={item.href}
                  >
                    {item.name}
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
