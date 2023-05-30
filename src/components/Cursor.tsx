import { useContext } from "react";
import useMousePosition from "./UseMousePosition";
import CursorContext from "../context/cursorContext";

const Cursor = () => {
  const hoverLink = useContext(CursorContext);
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        className={hoverLink ? "dot hoverLink" : "dot"}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
