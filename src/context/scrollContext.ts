import { createContext } from "react";
import { ScrollContextType } from "../types/Types";

const ScrollContext = createContext<ScrollContextType>(false);

export default ScrollContext;
