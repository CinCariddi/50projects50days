import { useRef, useEffect, useState } from "react";
import "./Day50.css";

export default function Day50() {
    let seconds = 0;
    let score = 0;
    let selected_insect = {};

    function startGame() {
        setInterval(increaseTime, 1000);
    }

    function increaseTime() {
        const timeEl = document.getElementById("time");
        let m = Math.floor(seconds / 60);
        let s = seconds % 60;
        m = m < 10 ? `0${m}` : m;
        s = s < 10 ? `0${s}` : s;
        timeEl.innerHTML = `Time: ${m}:${s}`;
        seconds++;
    }

    function createInsect() {
        const game_container = document.getElementById("game-container");
        const insect = document.createElement("div");
        insect.classList.add("insect");
        const { x, y } = getRandomLocation();
        insect.style.top = `${y}px`;
        insect.style.left = `${x}px`;
        insect.innerHTML = `<img src="${selected_insect.src}" alt="${
            selected_insect.alt
        }" style="transform: rotate(${Math.random() * 360}deg)" />`;

        insect.addEventListener("click", catchInsect);

        game_container.appendChild(insect);
    }

    function getRandomLocation() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = Math.random() * (width - 200) + 100;
        const y = Math.random() * (height - 200) + 100;
        return { x, y };
    }

    function catchInsect() {
        increaseScore();
        this.classList.add("caught");
        setTimeout(() => this.remove(), 2000);
        addInsects();
    }

    function addInsects() {
        setTimeout(createInsect, 1000);
        setTimeout(createInsect, 1500);
    }

    function increaseScore() {
        const scoreEl = document.getElementById("score");
        const message = document.getElementById("message");
        score++;
        if (score > 19) {
            message.classList.add("visible");
        }
        scoreEl.innerHTML = `Score: ${score}`;
    }

    useEffect(() => {
        const screens = document.querySelectorAll(".screen");
        const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
        choose_insect_btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const img = btn.querySelector("img");
                const src = img.getAttribute("src");
                const alt = img.getAttribute("alt");
                selected_insect = { src, alt };
                screens[1].classList.add("up");
                setTimeout(createInsect, 1000);
                startGame();
            });
        });
    }, []);

    function handleClick() {
        const screens = document.querySelectorAll(".screen");
        screens[0].classList.add("up");
    }

    return (
        <div className="contenedorDia50">
            <div className="screen">
                <h1>Catch The Insect</h1>
                <button className="btnDay50" id="start-btn" onClick={handleClick}>
                    Play Game
                </button>
            </div>

            <div className="screen">
                <h1>What is your "favorite" insect?</h1>
                <ul className="insects-list">
                    <li>
                        <button className="choose-insect-btn">
                            <p>Fly</p>
                            <img
                                src="http://pngimg.com/uploads/fly/fly_PNG3946.png"
                                alt="fly"
                                className="fly"
                            />
                        </button>
                    </li>
                    <li>
                        <button className="choose-insect-btn">
                            <p>Mosquito</p>
                            <img
                                src="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
                                alt="mosquito"
                                className="mosquito"
                            />
                        </button>
                    </li>
                    <li>
                        <button className="choose-insect-btn">
                            <p>Spider</p>
                            <img
                                src="http://pngimg.com/uploads/spider/spider_PNG12.png"
                                alt="spider"
                                className="spider"
                            />
                        </button>
                    </li>
                    <li>
                        <button className="choose-insect-btn">
                            <p>Roach</p>
                            <img
                                src="http://pngimg.com/uploads/roach/roach_PNG12163.png"
                                alt="roach"
                                className="roach"
                            />
                        </button>
                    </li>
                </ul>
            </div>

            <div className="screen game-container" id="game-container">
                <h3 id="time" className="time">
                    Time: 00:00
                </h3>
                <h3 id="score" className="score">
                    Score: 0
                </h3>
                <h5 id="message" className="message">
                    Are you annoyed yet? <br />
                    You are playing an impossible game!!
                </h5>
            </div>
        </div>
    );
}
