import Carousel from "./Carousel";

const Tienda = (props: any) => {
  const rotate = props.rotate;

  return (
    <div className="main-wrapper">
      <section className="picture-container">
        <div className="tienda-picture">
          <div
            style={{ transform: `rotateZ(${rotate}deg)` }}
            className="left-dec"
          ></div>
          <div
            style={{ transform: `rotate(-${rotate}deg)` }}
            className="right-dec"
          ></div>
        </div>
      </section>
      <section className="section-container">
        <Carousel setHoverLink={props.setHoverLink} deskTop={props.deskTop} />
      </section>
    </div>
  );
};

export default Tienda;
