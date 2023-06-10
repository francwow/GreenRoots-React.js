import { InicioProps } from "../types/Types";
import Social from "./Social";
import InicioNav from "./InicioNav";
import Logo from "./Logo";

const Inicio = (props: InicioProps) => {
  return (
    <div className="inicio-modal container-flex-column">
      <Logo />
      <InicioNav setHoverLink={props.setHoverLink} />
      <Social setHoverLink={props.setHoverLink} />
    </div>
  );
};

export default Inicio;
