import "./Day20.css";
import { useRef } from "react";

export default function Day20() {
    const buttonRef = useRef(null);

  const handleClick = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    const buttonTop = buttonRef.current.offsetTop;
    const buttonLeft = buttonRef.current.offsetLeft;
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    buttonRef.current.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  };

  return (
    <div className="contenedorDia20">
        <button className="ripple button20" ref={buttonRef} onClick={handleClick}>
            Click Me
        </button>
    </div>
  );
}