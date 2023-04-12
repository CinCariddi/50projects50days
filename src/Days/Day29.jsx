import { useState } from "react";
import "./Day29.css";

export default function Day29() {
    const [likes, setLikes] = useState(0);

    function handleDoubleClick() {
        setLikes(likes + 1);
        // createHeart(e);
        console.log(likes);
    }

  // const createHeart = () => {
  //   const loveMe = document.querySelector(".heart");
  //   const heart = document.createElement("i");
  //   console.log("heart", heart);
  //   heart.classList.add("fas");
  //   heart.classList.add("fa-heart");

  //   loveMe.append(heart);

  //   setTimeout(() => heart.remove(), 1000);
  // };

    return (
        <div className="contenedorDia29">
            <div className="containerDay29">
                <h3>Double click on the image to 🧡 it</h3>
                <small>You liked it {likes} times</small>
                <img
                src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="img"
                className="imagen28"
                onDoubleClick={handleDoubleClick}
                />
                <div className="heart fa-heart"></div>
            </div>
        </div>
    );
}