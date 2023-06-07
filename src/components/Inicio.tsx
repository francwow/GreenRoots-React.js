import { HeaderProps } from "../types/Types";
import logoImage from "../assets/webpImages/logo.webp";
import Social from "./Social";
import InicioNav from "./InicioNav";

const Inicio = (props: HeaderProps) => {
  return (
    <div className="inicio-modal container-flex-column">
      <div className="logo-container">
        <img src={logoImage} alt="Green Roots logo" />
      </div>

      <InicioNav setHoverLink={props.setHoverLink} />
      <Social setHoverLink={props.setHoverLink} />
    </div>
  );
};

export default Inicio;
