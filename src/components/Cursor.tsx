import { useContext, useEffect, useRef } from "react";
import CursorContext from "../context/cursorContext";

const Cursor = () => {
  const hoverLink = useContext(CursorContext);
  const cursorRef = useRef<HTMLDivElement>(null);
  const currentPoint = { x: 0, y: 0 };
  const targetPoint = { x: 0, y: 0 };

  function lerp() {
    const dx = targetPoint.x - currentPoint.x;
    const dy = targetPoint.y - currentPoint.y;

    currentPoint.x += dx * 0.3;
    currentPoint.y += dy * 0.3;

    cursorRef.current?.style.setProperty("--x", `${currentPoint.x}`);
    cursorRef.current?.style.setProperty("--y", `${currentPoint.y}`);

    requestAnimationFrame(lerp);
  }

  function mouseMoveHandler() {
    document.addEventListener("pointermove", (event) => {
      const { clientX, clientY } = event;

      targetPoint.x = clientX;
      targetPoint.y = clientY;
    });
  }

  useEffect(() => {
    lerp();
    mouseMoveHandler();
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={hoverLink ? "dot hoverLink" : "dot"}
      ></div>
    </>
  );
};

export default Cursor;
