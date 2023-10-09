import "./Style/Day21.css";
import { useRef, useState } from "react";

export default function Day21() {
  const [fillClass, setFillClass] = useState("fill");
  const [emptyClass, setEmptyClass] = useState("empty");
  const imageDoc = useRef(null)

  function handleDragStart() {
    setFillClass("fill hold");
    setTimeout(() => setFillClass("invisible"), 0);
  }

  function handleDragEnd() {
    setFillClass("fill");
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDragEnter(e) {
    e.target.classList.add('hovered')
  }

  function handleDragLeave(e) {
    setEmptyClass("empty");
    e.target.classList.remove('hovered')
  }

  function handleDragDrop(e) {
    setEmptyClass("empty");
    e.target.append(imageDoc.current)
    e.target.classList.remove('hovered')
  }

  return (
    <div className="contenedorDia21">
      <div 
        className={emptyClass}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}>
        <div
          className={fillClass}
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          ref={imageDoc}
        ></div>
      </div>
      <div
        className={emptyClass}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={emptyClass}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={emptyClass}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={emptyClass}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
    </div>
  );
}