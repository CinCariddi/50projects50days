import React, { useEffect, useState } from "react";
import "./Day30.css";

export default function Day30() {
    const [text, setText] = useState("We Love Programming!");
    const [idx, setIdx] = useState(1);
    const [speed, setSpeed] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIdx(idx + 1);
        }, 300 / speed);

        return () => clearTimeout(timer);
    }, [idx, speed]);

    useEffect(() => {
        if (idx > text.length) {
        setIdx(1);
        }
    }, [idx, text]);

    useEffect(() => {
        setText("We Love Programming!");
        setIdx(1);
        setSpeed(1);
    }, []);

    const handleSpeedChange = (e) => {
        setSpeed(e.target.value);
    };

    return (
        <div className="contenedorDia30">
            <h1 id="text">{text.slice(0, idx)}</h1>
            <div className="conteinerDay30">
                <label for="speed">Speed: </label>
                <input
                type="number"
                name="speed"
                id="speed"
                value={speed}
                min="1"
                max="10"
                step="1"
                onChange={handleSpeedChange}
                className="input30"
                />
            </div>
        </div>
    );
}
