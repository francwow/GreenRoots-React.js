import { deskTop, setHoverLink } from "../types/Types";
import Logo from "./Logo";
import Social from "./Social";

type Footer = {
  deskTop: deskTop;
  setHoverLink: setHoverLink;
};

const Footer = (props: Footer) => {
  const { deskTop, setHoverLink } = props;

  return (
    <>
      {deskTop ? (
        <div className="footer-wrapper">
          <Logo />
          <div className="footer-info">
            <div className="info-item">
              <span>+57 3132105286</span>
            </div>
            <div className="info-item">
              <span>601 8964576</span>
            </div>
            <div className="info-item">
              <span>cra 18 # 140-33 Barrio Alcala, Bogota DC, Colombia</span>
            </div>
          </div>
          <Social setHoverLink={setHoverLink} />
        </div>
      ) : (
        <div className="footer-wrapper">
          <Logo />
          <div className="footer-info">
            <div className="info-item">
              <span>+57 3132105286</span>
            </div>
            <div className="info-item">
              <span>601 8964576</span>
            </div>
            <div className="info-item">
              <span>cra 18 # 140-33 Barrio Alcala, Bogota DC, Colombia</span>
            </div>
            <Social setHoverLink={setHoverLink} />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
