import { useEffect, useState } from "react";
import { tiendaItems } from "../data/tiendaItems";

const Carousel = (props: any) => {
  const initialState = 0;
  const [index, setIndex] = useState(initialState);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const startCarousel = setInterval(function () {
      increaseIndex();
    }, 5000);
    return () => clearInterval(startCarousel);
  });

  const increaseIndex = () => {
    // console.log(index); //
    if (index < tiendaItems.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(initialState);
    }
  };

  return (
    <div className="carousel">
      {tiendaItems.map((item) => {
        return (
          <div
            key={item.index}
            aria-label="0"
            className={`carousel-item ${
              index === item.index ? "show-item" : ""
            }`}
          >
            <div className="item-info">
              {props.deskTop ? (
                <h2
                  className={`${
                    hovered && props.deskTop
                      ? "button-hovered item-header"
                      : "item-header"
                  } ${index === item.index ? "fade-in-right" : ""}`}
                >
                  {item.name}
                </h2>
              ) : null}

              <button
                onMouseEnter={() => {
                  setHovered(true);
                  props.setHoverLink(true);
                }}
                onMouseLeave={() => {
                  setHovered(false);
                  props.setHoverLink(false);
                }}
                className={index === item.index ? "button" : ""}
              >
                COMPRAR
              </button>
            </div>
            <div className="img-container">
              <img src={item.img} alt="GreenRoots product" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
