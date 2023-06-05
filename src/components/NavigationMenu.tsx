import { HeaderProps } from "../types/Types";
import { navItems } from "../data/navItems";
import { Link } from "react-router-dom";
import Social from "./Social";

const NavigationMenu = (props: HeaderProps) => {
  return (
    <nav
      className={
        props.deskTop
          ? "main-nav container-flex-column"
          : "main-nav container-flex-row"
      }
    >
      <ul
        className={
          props.deskTop
            ? "nav-container container-flex-column"
            : "nav-container container-flex-row"
        }
      >
        {navItems.map((item) => {
          return (
            <li key={item.name} className="nav-list-item">
              <Link
                onMouseEnter={() => {
                  props.setHoverLink(true);
                }}
                onMouseLeave={() => {
                  props.setHoverLink(false);
                }}
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {props.deskTop ? <Social setHoverLink={props.setHoverLink} /> : null}
    </nav>
  );
};

export default NavigationMenu;
