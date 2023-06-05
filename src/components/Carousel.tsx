import { useEffect, useRef, useState } from "react";
import { tiendaItems } from "../data/tiendaItems";

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  // const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const carouselItems = carouselRef.current?.childNodes;
    let index = 0;

    const startCarousel = setInterval(function () {
      if (index === 3) index = 0;
      console.log(index);
      carouselItems?.forEach((item, i) => {
        if (index === i) {
          item.style.opacity = "1";
        } else {
          item.style.opacity = "0";
        }
      });
      index++;
    }, 5000);

    return function stopTimer() {
      clearInterval(startCarousel);
    };
  }, []);

  return (
    <div className="carousel">
      <div ref={carouselRef} className="carousel-item-container">
        {tiendaItems.map((item) => {
          return (
            <div key={item.name} aria-label="0" className="carousel-item">
              <div className="item-info">{/* <h2>{item.name}</h2> */}</div>
              <div className="video-container">
                <figure className="video-figure">
                  <video
                    loop
                    muted
                    autoPlay={true}
                    width={300}
                    className="video"
                  >
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
