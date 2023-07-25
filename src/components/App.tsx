import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import {
  MenuActiveType,
  CursorContextType,
  ScrollContextType,
  LanguageContextType,
} from "../types/Types";
import MenuActiveContext from "../context/menuActiveContext";
import CursorContext from "../context/cursorContext";
import ScrollContext from "../context/scrollContext";
import EnglishContext from "../context/EnglishContext";
import Header from "./Header";
import Cursor from "./Cursor";
import ScrollTop from "./ScrollTop";
import Routing from "./Routing";
import { Images } from "../data/Images";
import Whatsapp from "./Whatsapp";

function App() {
  const [menuActive, setMenuActive] = useState<MenuActiveType>(false);
  const [hoverLink, setHoverLink] = useState<CursorContextType>(false);
  const [scrollDown, setScrollDown] = useState<ScrollContextType>(false);
  const [language, setLanguage] = useState<LanguageContextType>("ES");
  const deskTop = useMediaQuery("(min-width: 961px)");
  const [rotate, setRotate] = useState<number>(
    deskTop ? 700 / (window.scrollY + 100) : 1000 / (window.scrollY + 100)
  );

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    let noScroll = 0;

    function scrollHandle() {
      const scrolled = window.scrollY;
      if (scrolled > noScroll) {
        setScrollDown(true);
      } else if (scrolled < noScroll) {
        setScrollDown(false);
      }
      noScroll = scrolled <= 0 ? 0 : scrolled;
      setRotate(700 / (scrolled + 100));
    }

    window.addEventListener("scroll", scrollHandle);

    Images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollTop />
      <EnglishContext.Provider value={language}>
        <ScrollContext.Provider value={scrollDown}>
          <MenuActiveContext.Provider value={menuActive}>
            <CursorContext.Provider value={hoverLink}>
              <div className="page-wrapper">
                {deskTop ? <Cursor /> : null}
                <Header
                  setLanguage={setLanguage}
                  deskTop={deskTop}
                  setHoverLink={setHoverLink}
                  setMenuActive={setMenuActive}
                />
                <Routing
                  setHoverLink={setHoverLink}
                  setMenuActive={setMenuActive}
                  deskTop={deskTop}
                  rotate={rotate}
                  setLanguage={setLanguage}
                />
              </div>
            </CursorContext.Provider>
          </MenuActiveContext.Provider>
        </ScrollContext.Provider>
      </EnglishContext.Provider>
    </BrowserRouter>
  );
}

export default App;
