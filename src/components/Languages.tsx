import { useState, useContext } from "react";
import { setHoverLink, setLanguage } from "../types/Types";
import LanguageContext from "../context/EnglishContext";

type Languages = {
  setLanguage: setLanguage;
  setHoverLink: setHoverLink;
  inicio: boolean;
};

const Languages = (props: Languages) => {
  const { setLanguage, setHoverLink, inicio } = props;
  const language = useContext(LanguageContext);

  return (
    <div
      style={
        inicio
          ? { position: "absolute", top: "2%", right: "2%" }
          : { position: "initial" }
      }
    >
      <ul className="language-container">
        <li>
          <span
            onMouseEnter={() => {
              props.setHoverLink(true);
            }}
            onMouseLeave={() => {
              props.setHoverLink(false);
            }}
            tabIndex={0}
            onClick={() => setLanguage("EN")}
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => e.preventDefault}
            className={language === "EN" ? "language selected" : "language"}
          >
            EN
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => {
              props.setHoverLink(true);
            }}
            onMouseLeave={() => {
              props.setHoverLink(false);
            }}
            tabIndex={0}
            onClick={() => setLanguage("ES")}
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => e.preventDefault}
            className={language === "ES" ? "language selected" : "language"}
          >
            ES
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Languages;
