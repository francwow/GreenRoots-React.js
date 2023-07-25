import { Link } from "react-router-dom";
import { setHoverLink } from "../types/Types";
import CTA from "./CTA";

type ContactInfo = {
  contact: (node?: Element | null | undefined) => void;
  contactInView: boolean;
  setHoverLink: setHoverLink;
};

export const InfoEs = (props: ContactInfo) => {
  const { contact, contactInView, setHoverLink } = props;

  return (
    <div
      ref={contact}
      className={
        contactInView ? "contacto-container in-view" : "contacto-container"
      }
    >
      <div className="contacto-heading">
        <h2>Contacto</h2>
      </div>
      <ul className="info-container">
        <li className="info-item">
          <span>
            <strong>Whatsapp:</strong> +57 3132105286
          </span>
        </li>
        <li className="info-item">
          <span>
            <strong>Teléfono:</strong> 601 8964576
          </span>
        </li>
        <li className="info-item">
          <span>
            <strong>Direccíon:</strong> cra 18 # 140-33 Barrio Alcala, Bogota
            DC, Colombia
          </span>
        </li>
      </ul>
      {/* <ul className="contacto-social">
        <li className="info-item">
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blanket"
            to={"https://www.instagram.com/greenrootscolombia/"}
          >
            Instagram
          </Link>
        </li>
        <li className="info-item">
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blank"
            to={"https://www.instagram.com/greenrootscolombia/"}
          >
            Facebook
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export const InfoEn = (props: ContactInfo) => {
  const { contact, contactInView, setHoverLink } = props;

  return (
    <div
      ref={contact}
      className={
        contactInView ? "contacto-container in-view" : "contacto-container"
      }
    >
      <div className="contacto-heading">
        <h2>Contact</h2>
      </div>
      <ul className="info-container">
        <li className="info-item">
          <span>
            <strong>Whatsapp:</strong> +57 3132105286
          </span>
        </li>
        <li className="info-item">
          <span>
            <strong>Tel:</strong> 601 8964576
          </span>
        </li>
        <li className="info-item">
          <span>
            <strong>Address:</strong> cra 18 # 140-33 Barrio Alcala, Bogota DC,
            Colombia
          </span>
        </li>
      </ul>
      {/* <ul className="contacto-social">
        <li className="info-item">
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blank"
            to={"https://www.instagram.com/greenrootscolombia/"}
          >
            Instagram
          </Link>
        </li>
        <li className="info-item">
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blank"
            to={"https://www.instagram.com/greenrootscolombia/"}
          >
            Facebook
          </Link>
        </li>
      </ul> */}
    </div>
  );
};
