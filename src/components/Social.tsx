import { Link } from "react-router-dom";
import { FacebookIcon } from "./Icons";
import { InstagramIcon } from "./Icons";
import { setHoverLink } from "../types/Types";

type Social = {
  setHoverLink: setHoverLink;
};

const Social = (props: Social) => {
  return (
    <div className="social-container">
      <div style={{ animationDelay: "0.5s" }} className="icon-container">
        <Link
          onMouseEnter={() => {
            props.setHoverLink(true);
          }}
          onMouseLeave={() => {
            props.setHoverLink(false);
          }}
          to={"https://www.instagram.com/greenrootscolombia/"}
        >
          <FacebookIcon />
        </Link>
      </div>
      <div style={{ animationDelay: "0.7s" }} className="icon-container">
        <Link
          onMouseEnter={() => {
            props.setHoverLink(true);
          }}
          onMouseLeave={() => {
            props.setHoverLink(false);
          }}
          to={"https://www.instagram.com/greenrootscolombia/"}
        >
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
};

export default Social;
