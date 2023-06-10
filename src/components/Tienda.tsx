import { HeaderProps } from "../types/Types";
import Carousel from "./Carousel";

const Tienda = (props: HeaderProps) => {
  return (
    <div className="main-wrapper">
      <div className="section-container">
        <Carousel setHoverLink={props.setHoverLink} deskTop={props.deskTop} />
      </div>
    </div>
  );
};

export default Tienda;
