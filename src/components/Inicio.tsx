import { useContext } from "react";
import ScrollContext from "../context/scrollContext";
import Carousel from "./Carousel";
import { HeaderProps } from "../types/Types";
import logoImage from "../assets/webpImages/logo_small.png";
import { headingText1, headingText2 } from "../data/headingTexts";

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
            <img src={logoImage} alt="Green Roots logo" />
          </div>
        ) : null}

        <div className="heading-container container-flex-column">
          <ul className="heading-text-container">
            {headingText1.map((text, index) => {
              return (
                <li
                  style={{
                    animation: `page-load ${index / 9}s ease forwards`,
                    // animationDelay: `${index / 2}s`,
                  }}
                  className="heading-text"
                  key={index}
                >
                  {text === "-" ? "\xa0" : text}
                </li>
              );
            })}
          </ul>
          <ul
            style={{ animationDelay: "0.1s" }}
            className="heading-text-container"
          >
            {headingText2.map((text, index) => {
              return (
                <li
                  style={{
                    animation: `page-load ${index / 9}s ease forwards`,
                    // animationDelay: `${index / 2}s`,
                  }}
                  className="heading-text"
                  key={index}
                >
                  {text === "-" ? "\xa0" : text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="section-container">
        <Carousel />
      </div>
    </div>
  );
};

export default Inicio;
