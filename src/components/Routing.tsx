import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Inicio from "./Inicio";
import Tienda from "./Tienda";
import CBD from "./CBD";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import {
  deskTop,
  rotate,
  setHoverLink,
  setMenuActive,
  setLanguage,
} from "../types/Types";

type Routing = {
  rotate: rotate;
  deskTop: deskTop;
  setHoverLink: setHoverLink;
  setMenuActive: setMenuActive;
  setLanguage: setLanguage;
};

const Routing = (props: Routing) => {
  const { rotate, deskTop, setHoverLink, setMenuActive, setLanguage } = props;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Inicio setLanguage={setLanguage} setHoverLink={setHoverLink} />
        }
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
          <CBD rotate={rotate} setHoverLink={setHoverLink} deskTop={deskTop} />
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
  );
};

export default Routing;
