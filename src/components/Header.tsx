import { useContext } from "react";
import CursorContext from "../context/cursorContext";
import { Link } from "react-router-dom";
import { navItems } from "./navItems";
import MenuActiveContext from "../context/menuActiveContext";
import NavigationMenu from "./NavigationMenu";
import { HeaderProps } from "../types/Types";

const Header = (props: HeaderProps) => {
  const hoverLink = useContext(CursorContext);
  const menuActive = useContext(MenuActiveContext);

  return (
    <div
      className={
        menuActive
          ? "header container-flex-column show"
          : "header container-flex-column"
      }
    >
      <NavigationMenu
        setMenuActive={props.setMenuActive}
        setHoverLink={props.setHoverLink}
      />

      <div className="header-container container-flex-row">
        <Link
          onMouseEnter={() => {
            props.setHoverLink(true);
          }}
          onMouseLeave={() => {
            props.setHoverLink(false);
          }}
          to={"/"}
        >
          <div className="logo-container">
            <img src="/logo_small.png" alt="Green Roots logo" />
          </div>
        </Link>

        <div className="burger">
          <button
            onClick={() => {
              props.setMenuActive(!menuActive);
            }}
            className={menuActive ? "burger-btn toggle" : "burger-btn"}
          >
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
