import { setHoverLink } from "../types/Types";
import Social from "./Social";
import InicioNav from "./InicioNav";
import Logo from "./Logo";

type Inicio = {
  setHoverLink: setHoverLink;
};

const Inicio = (props: Inicio) => {
  const { setHoverLink } = props;

  return (
    <div className="inicio-modal container-flex-column">
      <Logo />
      <InicioNav setHoverLink={setHoverLink} />
      <Social setHoverLink={setHoverLink} />
    </div>
  );
};

export default Inicio;
