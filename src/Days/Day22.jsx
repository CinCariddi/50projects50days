import "./Day22.css";
import { useRef, useState } from "react";

export default function Day22() {
  const canvas = useRef("canvas");
  const sizeEL = useRef("size");
  const colorEl = useRef("color");
  const clearEl = useRef("clear");

  const [size, setSize] = useState(5);
  const [isPressed, setIsPressed] = useState(false);
  const [color, setColor] = useState("black");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function drawCircle(x, y) {
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function drawLine(x1, y1, x2, y2) {
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
  }

  function mousedown(e) {
    setIsPressed(true);
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  }

  function mouseup() {
    setIsPressed(false);
    setX(undefined);
    setY(undefined);
  }

  function mousemove(e) {
    if (isPressed) { 
        const x2 = e.nativeEvent.offsetX;
        const y2 = e.nativeEvent.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        setX(x2);
        setY(y2);
    }
  }

  function increase() {
    if (size >= 5 && size < 50) {
      setSize(5 + size);
    }
  }

  function decrease() {
    if (size > 5 && size <= 50) {
      setSize(size - 5);
    }
  }

  function change(e) {
    setColor(e.target.value);
  }

  function click() {
    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
  }

  return (
    <div className="contenedorDia22">
      <canvas
        id="canvas"
        width="800"
        height="700"
        onMouseDown={(e) => mousedown(e)}
        onMouseUp={(e) => mouseup(e)}
        onMouseMove={(e) => mousemove(e)}
        ref={canvas}
      ></canvas>
      <div className="toolbox">
        <button id="decrease" onClick={decrease}>
          -
        </button>
        <span id="size" ref={sizeEL}>
          {size}
        </span>
        <button id="increase" onClick={increase}>
          +
        </button>
        <input
          type="color"
          id="color"
          ref={colorEl}
          onChange={(e) => change(e)}
        />
        <button id="clear" ref={clearEl} onClick={click}>
          X
        </button>
      </div>
    </div>
  );
}