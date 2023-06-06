import { useEffect, useRef, useState } from "react";
import { tiendaItems } from "../data/tiendaItems";

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const initialState = 0;
  const [index, setIndex] = useState(initialState);

  useEffect(() => {
    const startCarousel = setInterval(function () {
      increaseIndex();
    }, 5000);
    return () => clearInterval(startCarousel);
  });

  const clickHandlePlus = () => {
    setIndex(index + 1);
    if (index === tiendaItems.length - 1) setIndex(initialState);
    console.log(index);
  };

  const clickHandleMinus = () => {
    setIndex(index - 1);
    if (index === 0) setIndex(tiendaItems.length - 1);
    console.log(index);
  };

  const increaseIndex = () => {
    console.log(index); //
    if (index < tiendaItems.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(initialState);
    }
  };

  return (
    <div className="carousel">
      <div ref={carouselRef} className="carousel-item-container">
        {tiendaItems.map((item) => {
          return (
            <div
              key={item.index}
              style={index === item.index ? { opacity: "1" } : { opacity: 0 }}
              aria-label="0"
              className="carousel-item"
            >
              <div className="item-info"></div>
              <div className="video-container">
                <figure className="video-figure">
                  <video loop muted autoPlay width={300} className="video">
                    <source type="video/mp4" src={item.video} />
                  </video>
                </figure>
              </div>
            </div>
          );
        })}

        {/* <div className="carousel-dots container-flex-row">
          <div className="carousel-dot"></div>
          <div className="carousel-dot"></div>
          <div className="carousel-dot"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
