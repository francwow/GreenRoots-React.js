import { createContext } from "react";
import { MenuActiveType } from "../types/Types";

const MenuActiveContext = createContext<MenuActiveType>(false);

export default MenuActiveContext;
