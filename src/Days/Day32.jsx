import React, { useEffect } from "react";
import "./Day32.css";

export default function Day32() {
    function doTheTrick(theClickedOne) {
        const good = document.querySelector("#good");
        const cheap = document.querySelector("#cheap");
        const fast = document.querySelector("#fast");

        if (good.checked && cheap.checked && fast.checked) {
            if (good === theClickedOne) {
                fast.checked = false;
            }
            if (cheap === theClickedOne) {
                good.checked = false;
            }
            if (fast === theClickedOne) {
                cheap.checked = false;
            }
        }
    }

    useEffect(() => {
        const toggles = document.querySelectorAll(".toggle");
        toggles.forEach((toggle) =>
        toggle.addEventListener("change", (e) => doTheTrick(e.target))
        );
    });

    return (
        <div className="contenedorDia32">
            <h2>How do you want your project to be?</h2>
            <div class="toggle-container">
                <input type="checkbox" id="good" class="toggle" />
                <label for="good" class="label">
                <div class="ball"></div>
                </label>
                <span>Good</span>
            </div>
            <div class="toggle-container">
                <input type="checkbox" id="cheap" class="toggle" />
                <label for="cheap" class="label">
                <div class="ball"></div>
                </label>
                <span>Cheap</span>
            </div>
            <div class="toggle-container">
                <input type="checkbox" id="fast" class="toggle" />
                <label for="fast" class="label">
                <div class="ball"></div>
                </label>
                <span>Fast</span>
            </div>
        </div>
    );
}