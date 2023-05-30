import { createContext } from "react";
import { CursorContextType } from "../types/Types";

const CursorContext = createContext<CursorContextType>(false);

export default CursorContext;
