import { useContext } from "react";
import ScrollContext from "../context/scrollContext";
import {
  MenuActiveType,
  ScrollContextType,
  deskTop,
  setHoverLink,
  setLanguage,
  setMenuActive,
} from "../types/Types";
import MenuActiveContext from "../context/menuActiveContext";
import NavMenu from "./NavMenu";
import Languages from "./Languages";

type Header = {
  setMenuActive: setMenuActive;
  setHoverLink: setHoverLink;
  setLanguage: setLanguage;
  deskTop: deskTop;
};

const Header = (props: Header) => {
  const { setMenuActive, setHoverLink, setLanguage } = props;
  const menuActive = useContext<MenuActiveType>(MenuActiveContext);
  const scrollDown = useContext<ScrollContextType>(ScrollContext);

  return (
    <div className={!menuActive && scrollDown ? "header scrolled" : "header"}>
      <Languages
        inicio={false}
        setLanguage={setLanguage}
        setHoverLink={setHoverLink}
      />
      <div className="burger">
        <button
          onMouseEnter={() => {
            props.setHoverLink(true);
          }}
          onMouseLeave={() => {
            props.setHoverLink(false);
          }}
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
      <NavMenu setHoverLink={setHoverLink} setMenuActive={setMenuActive} />
    </div>
  );
};

export default Header;
