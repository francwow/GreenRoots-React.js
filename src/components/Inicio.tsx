import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ScrollContext from "../context/scrollContext";

const Inicio = (props) => {
  const scrollDown = useContext(ScrollContext);

  return (
    <div className="main-wrapper">
      <div
        className={
          scrollDown
            ? "brand-banner container-flex-column move-up"
            : "brand-banner container-flex-column"
        }
      >
        <div className="logo-container">
          <img src="/logo_small.png" alt="Green Roots logo" />
        </div>
        <div className="container-flex-row">
          <h4 className="heading-text">
            Invertir en el futuro es dejar tu huella
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
