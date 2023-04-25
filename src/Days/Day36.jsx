// import React, { useEffect, useRef, useState } from "react";
import "./Day36.css";

export default function Day36() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const SQUARES = 500;
  
    const setColor = (element) => {
      const color = getRandomColor();
      element.style.background = color;
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    };
  
    const removeColor = (element) => {
      element.style.background = '#1d1d1d';
      element.style.boxShadow = '0 0 2px #000';
    };
  
    const getRandomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };
  
    const renderSquares = () => {
      const squares = [];
      for (let i = 0; i < SQUARES; i++) {
        squares.push(
          <div
            key={i}
            className="square"
            onMouseOver={(e) => setColor(e.target)}
            onMouseOut={(e) => removeColor(e.target)}
          ></div>
        );
      }
      return squares;
    };

    return (
        <div className="contenedorDia36">
            <div class="containerDay36" id="container">{renderSquares()}</div>
        </div>
    );
}