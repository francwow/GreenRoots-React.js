import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import {
  MenuActiveType,
  CursorContextType,
  ScrollContextType,
} from "../types/Types";
import MenuActiveContext from "../context/menuActiveContext";
import CursorContext from "../context/cursorContext";
import ScrollContext from "../context/scrollContext";
import Inicio from "./Inicio";
import Tienda from "./Tienda";
import CBD from "./CBD";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Header from "./Header";
import Cursor from "./Cursor";

import ScrollTop from "./ScrollTop";

function App() {
  const [menuActive, setMenuActive] = useState<MenuActiveType>(false);
  const [hoverLink, setHoverLink] = useState<CursorContextType>(false);
  const [scrollDown, setScrollDown] = useState<ScrollContextType>(false);
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const deskTop = useMediaQuery("(min-width: 961px)");

  function scrollHandle() {
    let noScroll = 0;
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      if (scrolled > noScroll) {
        setScrollDown(true);
      } else if (scrolled < noScroll) {
        setScrollDown(false);
      }
      noScroll = scrolled <= 0 ? 0 : scrolled;
    });
  }

  window.onload = () => {
    setPageLoaded(true);
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    scrollHandle();
  }, []);

  return (
    <BrowserRouter>
      <ScrollTop />
      <ScrollContext.Provider value={scrollDown}>
        <MenuActiveContext.Provider value={menuActive}>
          <CursorContext.Provider value={hoverLink}>
            <div
              className={pageLoaded ? "page-wrapper loaded" : "page-wrapper"}
            >
              {deskTop ? <Cursor /> : null}
              <Header
                deskTop={deskTop}
                setHoverLink={setHoverLink}
                setMenuActive={setMenuActive}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Inicio
                      setHoverLink={setHoverLink}
                      setMenuActive={setMenuActive}
                      deskTop={deskTop}
                    />
                  }
                />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/cbd" element={<CBD />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
              </Routes>
            </div>
          </CursorContext.Provider>
        </MenuActiveContext.Provider>
      </ScrollContext.Provider>
    </BrowserRouter>
  );
}

export default App;
