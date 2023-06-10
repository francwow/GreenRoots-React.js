import { useContext } from "react";
import ScrollContext from "../context/scrollContext";
import NavigationMenu from "./NavigationMenu";
import NavigationMobile from "./NavigationMobile";
import { HeaderProps } from "../types/Types";
import Logo from "./Logo";
import MenuActiveContext from "../context/menuActiveContext";

const Header = (props: HeaderProps) => {
  const { setMenuActive, setHoverLink, deskTop } = props;
  const menuActive = useContext(MenuActiveContext);
  const scrollDown = useContext(ScrollContext);

  return (
    <div className={!menuActive && scrollDown ? "header scrolled" : "header"}>
      {deskTop ? (
        <>
          <Logo />
          <NavigationMenu
            deskTop={deskTop}
            setMenuActive={setMenuActive}
            setHoverLink={setHoverLink}
          />
        </>
      ) : (
        <>
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
          <NavigationMobile setMenuActive={setMenuActive} />
        </>
      )}
    </div>
  );
};

export default Header;
