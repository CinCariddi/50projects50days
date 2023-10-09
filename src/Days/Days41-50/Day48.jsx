import { useEffect } from "react";
import "./Style/Day48.css";

export default function Day48() {
    const unsplashURL = "https://source.unsplash.com/random/";
    const rows = 5;

    useEffect(() => {
        const container = document.querySelector(".containerDay48");
        for (let i = 0; i < rows * 3; i++) {
            const img = document.createElement("img");
            img.src = `${unsplashURL}${getRandomSize()}`;
            container.appendChild(img);
        }
    }, []);

    function getRandomSize() {
        return `${getRandomNr()}x${getRandomNr()}`;
    }

    function getRandomNr() {
        return Math.floor(Math.random() * 10) + 300;
    }
    return (
        <div className="contenedorDia48">
            <h1 className="titleDay48">Random Image Feed</h1>
            <div className="containerDay48"></div>
        </div>
    );
}