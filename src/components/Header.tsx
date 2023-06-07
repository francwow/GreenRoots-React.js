import { useContext } from "react";
import ScrollContext from "../context/scrollContext";
import NavigationMenu from "./NavigationMenu";
import { HeaderProps } from "../types/Types";
import logoImage from "../assets/webpImages/logo.webp";

const Header = (props: HeaderProps) => {
  const scrollDown = useContext(ScrollContext);

  return (
    <div className={scrollDown ? "header scrolled" : "header"}>
      {props.deskTop ? (
        <div className="logo-container">
          <img src={logoImage} alt="Green Roots logo" />
        </div>
      ) : null}
      <NavigationMenu
        deskTop={props.deskTop}
        setMenuActive={props.setMenuActive}
        setHoverLink={props.setHoverLink}
      />

      {/* <div className="header-container container-flex-row"> */}
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
      {/* </div> */}
    </div>
  );
};

export default Header;
