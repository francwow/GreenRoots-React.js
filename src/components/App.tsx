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
import { Images } from "../data/Images";

function App() {
  const [menuActive, setMenuActive] = useState<MenuActiveType>(false);
  const [hoverLink, setHoverLink] = useState<CursorContextType>(false);
  const [scrollDown, setScrollDown] = useState<ScrollContextType>(false);
  // const [pageLoaded, setPageLoaded] = useState<boolean>(false);
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
      <ScrollContext.Provider value={scrollDown}>
        <MenuActiveContext.Provider value={menuActive}>
          <CursorContext.Provider value={hoverLink}>
            <div className="page-wrapper">
              {deskTop ? <Cursor /> : null}
              <Header
                deskTop={deskTop}
                setHoverLink={setHoverLink}
                setMenuActive={setMenuActive}
              />
              <Routes>
                <Route
                  path="/"
                  element={<Inicio setHoverLink={setHoverLink} />}
                />
                <Route
                  path="/tienda"
                  element={
                    <Tienda
                      rotate={rotate}
                      setHoverLink={setHoverLink}
                      deskTop={deskTop}
                    />
                  }
                />
                <Route
                  path="/cbd"
                  element={
                    <CBD
                      rotate={rotate}
                      setHoverLink={setHoverLink}
                      deskTop={deskTop}
                    />
                  }
                />
                <Route
                  path="/nosotros"
                  element={
                    <Nosotros
                      rotate={rotate}
                      setHoverLink={setHoverLink}
                      deskTop={deskTop}
                    />
                  }
                />
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
