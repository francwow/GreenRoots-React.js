import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { MenuActiveType, CursorContextType } from "../types/Types";
import MenuActiveContext from "../context/menuActiveContext";
import CursorContext from "../context/cursorContext";
import Inicio from "./Inicio";
import Tienda from "./Tienda";
import CBD from "./CBD";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Header from "./Header";
import Cursor from "./Cursor";

function App() {
  const [menuActive, setMenuActive] = useState<MenuActiveType>(false);
  const [hoverLink, setHoverLink] = useState<CursorContextType>(false);
  const deskTop = useMediaQuery("(min-width: 991px)");

  return (
    <BrowserRouter>
      <MenuActiveContext.Provider value={menuActive}>
        <CursorContext.Provider value={hoverLink}>
          {deskTop ? <Cursor /> : null}
          <Header setHoverLink={setHoverLink} setMenuActive={setMenuActive} />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/cbd" element={<CBD />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </CursorContext.Provider>
      </MenuActiveContext.Provider>
    </BrowserRouter>
  );
}

export default App;
