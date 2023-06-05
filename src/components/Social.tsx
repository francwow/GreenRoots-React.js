import { Link } from "react-router-dom";
import { FacebookIcon } from "./Icons";
import { InstagramIcon } from "./Icons";

const Social = (props: any) => {
  return (
    <div className="social-container">
      <div className="icon-container">
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
      <div className="icon-container">
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
