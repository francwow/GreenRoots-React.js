import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ScrollContext from "../context/scrollContext";
import Carousel from "./Carousel";

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
            Productos a base de CBD, 100% cruelty free.
          </h4>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Inicio;
