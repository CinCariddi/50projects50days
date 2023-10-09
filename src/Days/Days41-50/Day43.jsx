import { useEffect, useState } from "react";
import "./Style/Day43.css";

export default function Day43() {
    const [selectedRating, setSelectedRating] = useState("Satisfied");

    useEffect(() => {
        const ratings = document.querySelectorAll(".rating");
        const ratingsContainer = document.querySelector(".ratings-container");
        const sendBtn = document.querySelector("#send");
        const panel = document.querySelector("#panel");
        ratingsContainer.addEventListener("click", handleRatingClick);
        sendBtn.addEventListener("click", (e) => {
            panel.innerHTML = `
                ❤
                <strong>Thank You!</strong>
                <br>
                <strong>Feedback: ${selectedRating}</strong>
                <p>We'll use your feedback to improve our customer support</p>
            `;
        });
        return () => {
            ratingsContainer.removeEventListener("click", handleRatingClick);
        };
    });

    function removeActive() {
        const ratings = document.querySelectorAll(".rating");
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.remove("active");
        }
    }

    function handleRatingClick(e) {
        if (
            e.target.parentNode.classList.contains("rating") &&
            e.target.nextElementSibling
        ) {
            removeActive();
            e.target.parentNode.classList.add("active");
            setSelectedRating(e.target.nextElementSibling.innerHTML);
        } else if (
            e.target.parentNode.classList.contains("rating") &&
            e.target.previousSibling &&
            e.target.previousElementSibling.nodeName === "IMG"
        ) {
            removeActive();
            e.target.parentNode.classList.add("active");
            setSelectedRating(e.target.innerHTML);
        }
    }

    return (
        <div className="contenedorDia43">
            <div id="panel" className="panel-container">
                <strong>
                    How satisfied are you with our <br /> customer support performance?
                </strong>
                <div className="ratings-container">
                    <div className="rating">
                        <img
                            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
                            alt=""
                        />
                        <small>Unhappy</small>
                    </div>
                    <div className="rating">
                        <img
                            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
                            alt=""
                        />
                        <small>Neutral</small>
                    </div>
                    <div className="rating active">
                        <img
                            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
                            alt=""
                        />
                        <small>Satisfied</small>
                    </div>
                </div>
                <button id="send" className="btnDay43">
                    Send Review
                </button>
                <div id="panel"></div>
            </div>
        </div>
    );
}