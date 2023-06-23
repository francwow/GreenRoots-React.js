import { useInView } from "react-intersection-observer";
import product2 from "../assets/webpImages/product2.webp";
import product1 from "../assets/webpImages/product1.webp";

export const TiendaCopy = () => {
  const { ref: tiendaProduct, inView: productInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: tiendaCopy, inView: copyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="tienda-copy-wrapper">
      <div className="tienda-copy-container first-copy">
        <div
          ref={tiendaCopy}
          className={
            copyInView ? "product-copy-wrapper in-view" : "product-copy-wrapper"
          }
        >
          <div className="copy-background-one"></div>
          <div className="copy-background-two"></div>
          <div className="tienda-copy">
            {" "}
            <h2>Ofrecemos productos 100% naturales y 100% colombianos.</h2>
            <p>
              Green Roots ofrece productos totalmente naturales, creados a base
              de CBD y sin químicos. Al comprar nuestros productos estás
              ayudando a reducir tu propia huella de CO2 ya que somos una
              empresa{" "}
            </p>
          </div>
        </div>
        <div
          ref={tiendaProduct}
          className={
            productInView ? "tienda-product in-view" : "tienda-product"
          }
        >
          <img src={product1} alt="Green Roots product" />
        </div>
      </div>
    </div>
  );
};

export const TiendaCopy2 = () => {
  const { ref: tiendaProduct, inView: productInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: tiendaCopy, inView: copyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="tienda-copy-wrapper">
      <div className="tienda-copy-container second-copy">
        <div
          ref={tiendaProduct}
          className={
            productInView ? "tienda-product in-view" : "tienda-product"
          }
        >
          <img src={product2} alt="Green Roots product" />
        </div>
        <div
          ref={tiendaCopy}
          className={
            copyInView ? "product-copy-wrapper in-view" : "product-copy-wrapper"
          }
        >
          <div className="copy-background-one"></div>
          <div className="copy-background-two"></div>
          <div className="tienda-copy">
            {" "}
            <h2>Ofrecemos productos 100% naturales y 100% colombianos.</h2>
            <p>
              Green Roots ofrece productos totalmente naturales, creados a base
              de CBD y sin químicos. Al comprar nuestros productos estás
              ayudando a reducir tu propia huella de CO2 ya que somos una
              empresa{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
