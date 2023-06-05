import { useContext } from "react";
import ScrollContext from "../context/scrollContext";
import Carousel from "./Carousel";
import { HeaderProps } from "../types/Types";

const Inicio = (props: HeaderProps) => {
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
        {!props.deskTop ? (
          <div className="logo-container">
            <img src="/logo_small.png" alt="Green Roots logo" />
          </div>
        ) : null}

        <div className="container-flex-row">
          <h4 className="heading-text">
            Productos a base de CBD, 100% cruelty free.
          </h4>
        </div>
      </div>
      <div className="section-container">
        <Carousel />
      </div>
    </div>
  );
};

export default Inicio;
