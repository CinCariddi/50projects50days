import React, { useEffect, useRef, useState } from "react";
import "./Day34.css";

export default function Day34() {
  const [show, setShow] = useState(false);
  const [isCounting, setIsCounting] = useState(false)
  const numbers = [ , 3, , 2, , 1, , 0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const animation = useRef("animation");
  const inition = useRef("inition");
  const [intervalId, setIntervalId] = useState(null);
  console.log("currentIndex", currentIndex);

  useEffect(() => {
    if (show) {
      inition.current.classList.add("hide");
    } else {
      inition.current.classList.remove("hide");
    }
  }, [show]);

  function runAnimation() {
    if (!isCounting) {
        setIsCounting(true)
        setShow(false);
        clearInterval(intervalId)
        let nextIndex = 0;
        const newIntervalId  = setInterval(() => {
          setCurrentIndex(nextIndex);
          nextIndex++;
          if (nextIndex >= numbers.length) {
            clearInterval(newIntervalId );
            setTimeout(() => {
              setShow(false);
              setCurrentIndex(0);
              setIsCounting(false)
            }, 1000);
          }
        }, 500);
        setShow(true)
        setIntervalId(newIntervalId);
    }
  }

  return (
    <div className="contenedorDia34">
      {show === true ? (
        <div className="counter" ref={animation}>
          <div className="nums">
            {numbers.map((num, idx) => (
              <span key={idx} className={idx === currentIndex ? "in" : "out"}>
                {num}
              </span>
            ))}
          </div>
          <h4>Get Ready</h4>
        </div>
      ) : (
        <div></div>
      )}
      <div className="final" ref={inition}>
        <h1>GO</h1>
        <button id="replay" onClick={runAnimation}>
          <span>Replay</span>
        </button>
      </div>
    </div>
  );
}