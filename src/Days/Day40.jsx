import { useEffect, useState } from "react";
import "./Day40.css";

export default function Day40() {
    const [isBig, setIsBig] = useState(false);
    const [boxesCreated, setBoxesCreated] = useState(false);

    function createBoxes() {
        setIsBig(!isBig);
        setBoxesCreated(true);
    }

    const boxes = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            boxes.push(
                <div
                key={`box-${i}-${j}`}
                className="box40"
                style={{
                    backgroundPosition: `${-j * 125}px ${-i * 125}px`
                }}
                />
            );
        }
    }

    useEffect(() =>{
        createBoxes()
    },[])

    return (
        <div className="contenedorDia40">
            <button className="magic" onClick={createBoxes}>
                Magic 🎩
            </button>
            <div className={`boxes40 ${isBig ? "big" : ""}`}>
                {boxesCreated && boxes}
            </div>
        </div>
    );
}