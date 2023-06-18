import { useContext, useEffect, useRef, useState } from "react";
import { tiendaItems } from "../data/tiendaItems";
import { deskTop, setHoverLink } from "../types/Types";
import LanguageContext from "../context/EnglishContext";

type Carousel = {
  deskTop: deskTop;
  setHoverLink: setHoverLink;
};

const Carousel = (props: Carousel) => {
  const language = useContext(LanguageContext);
  const initialState = 0;
  const [index, setIndex] = useState<number>(initialState);
  const [hovered, setHovered] = useState<boolean>(false);

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
                  {language === "ES" ? item.nameES : item.nameEN}
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
                {language === "ES" ? "COMPRAR" : "BUY"}
              </button>
            </div>
            <div className="img-container">
              <img src={item.img} alt="GreenRoots product" />
            </div>
          </div>
        );
      })}
      <div className="carousel-dots">
        {tiendaItems.map((item) => {
          return (
            <button
              onClick={() => {
                setIndex(item.index);
              }}
              key={item.index}
              className={
                item.index === index ? "carousel-dot clicked" : "carousel-dot"
              }
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
