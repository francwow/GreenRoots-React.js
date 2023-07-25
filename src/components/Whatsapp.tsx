import { Link } from "react-router-dom";
import { useContext } from "react";
import whatsappLogo from "../assets/webpImages/whatsapp_logo.webp";
import MenuActiveContext from "../context/menuActiveContext";
import { setHoverLink } from "../types/Types";

type Whatsapp = {
  setHoverLink: setHoverLink;
};

const Whatsapp = (props: Whatsapp) => {
  const menuActive = useContext(MenuActiveContext);

  return menuActive ? null : (
    <aside className="whatsapp">
      <Link
        onMouseEnter={() => {
          props.setHoverLink(true);
        }}
        onMouseLeave={() => {
          props.setHoverLink(false);
        }}
        target="_blank"
        to={"https://web.whatsapp.com/"}
      >
        <img src={whatsappLogo} alt="Whatsapp logo" />
      </Link>
    </aside>
  );
};

export default Whatsapp;
