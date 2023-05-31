import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./navItems";
import CursorContext from "../context/cursorContext";
import MenuActiveContext from "../context/menuActiveContext";
import ScrollContext from "../context/scrollContext";
import NavigationMenu from "./NavigationMenu";
import { HeaderProps } from "../types/Types";
import { useMediaQuery } from "usehooks-ts";

const Header = (props: HeaderProps) => {
  const hoverLink = useContext(CursorContext);
  const menuActive = useContext(MenuActiveContext);
  const scrollDown = useContext(ScrollContext);
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className={
        scrollDown
          ? "header container-flex-column scrolled"
          : "header container-flex-column"
      }
    >
      <NavigationMenu
        setMenuActive={props.setMenuActive}
        setHoverLink={props.setHoverLink}
      />

      <div className="header-container container-flex-row">
        {/* <Link
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
        </Link> */}

        {/* <div className="burger">
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
        </div> */}
      </div>
    </div>
  );
};

export default Header;
