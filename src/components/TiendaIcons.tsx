import tiendaIcon1 from "../assets/webpImages/tienda-icon-01.webp";
import tiendaIcon2 from "../assets/webpImages/tienda-icon-02.webp";
import tiendaIcon3 from "../assets/webpImages/tienda-icon-03.webp";
import tiendaIcon4 from "../assets/webpImages/tienda-icon-04.webp";

const TiendaIcons = () => {
  return (
    <div className="tienda-icons">
      <div className="tienda-icon">
        <img src={tiendaIcon1} alt="Icon" />
        <span>Ingredientes Naturales</span>
      </div>
      <div className="tienda-icon">
        <img src={tiendaIcon2} alt="Icon" />
        <span>Cruelty Free</span>
      </div>
      <div className="tienda-icon">
        <img src={tiendaIcon3} alt="Icon" />
        <span>Hecho a mano</span>
      </div>
      <div className="tienda-icon">
        <img src={tiendaIcon4} alt="Icon" />
        <span>Libre de parabenoss</span>
      </div>
    </div>
  );
};

export default TiendaIcons;
