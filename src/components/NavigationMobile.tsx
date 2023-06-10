import { navItems } from "../data/navItems";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Social from "./Social";
import MenuActiveContext from "../context/menuActiveContext";

const NavigationMobile = (props: any) => {
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
                    onClick={() => props.setMenuActive(false)}
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Social />
        </div>
      ) : null}
    </>
  );
};

export default NavigationMobile;
