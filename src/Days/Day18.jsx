import { useState } from "react";
import "./Day18.css";

const imagenes = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
];
export default function Day18() {
  const [indiceActual, setIndiceActual] = useState(0);

  function mostrarSiguienteImagen() {
    setIndiceActual((indiceActual + 1) % imagenes.length);
  }

  function mostrarImagenAnterior() {
    setIndiceActual((indiceActual + imagenes.length - 1) % imagenes.length);
  }

  console.log("imagenes", indiceActual);
  const styles = {
    backgroundImage: `url(${imagenes[indiceActual]})`
  };

  return (
    <div className="contenedorDia18" style={styles}>
      <div class="slider-container">
        <div className="slide active18">
          <img src={imagenes[indiceActual]} alt="Imagen actual" />
        </div>
        <button
          className="arrow left-arrow"
          id="left"
          onClick={mostrarImagenAnterior}
        >
          <i className="fas fa-arrow-left">🢀</i>
        </button>
        <button
          className="arrow right-arrow"
          id="right"
          onClick={mostrarSiguienteImagen}
        >
          <i className="fas fa-arrow-right">🢂</i>
        </button>
      </div>
    </div>
  );
}