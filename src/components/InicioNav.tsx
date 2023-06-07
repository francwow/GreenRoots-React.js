import { Link } from "react-router-dom";
import { InicioNavItems } from "../data/navItems";

const InicioNav = (props: any) => {
  return (
    <div className="inicio-nav-container">
      <ul className="inicio-nav">
        {InicioNavItems.map((item, index) => {
          return (
            <li
              key={item.name}
              style={{ animationDelay: `${index / 7}s` }}
              className="inicio-list-item"
            >
              <Link
                onMouseEnter={() => {
                  props.setHoverLink(true);
                }}
                onMouseLeave={() => {
                  props.setHoverLink(false);
                }}
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InicioNav;