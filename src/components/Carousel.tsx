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
              aria-label="0"
              className={`carousel-item ${
                index === item.index ? "show-item" : ""
              }`}
            >
              <div className="item-info"></div>
              <div className="video-container">
                <figure className="video-figure">
                  <video autoPlay muted loop width={200} className="video">
                    <source type="video/mp4" src={item.video1} />
                    <source type="video/webm" src={item.video2} />
                    Sorry, your browser does not support embedded videos.
                  </video>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
