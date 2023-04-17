import { useRef, useState } from "react";
import "./Day29.css";

export default function Day29() {
    const [likes, setLikes] = useState(0);

    function handleDoubleClick(e) {
        setLikes(likes + 1);
        createHeart(e)
    }

    const createHeart = (e) => {
        const hearts = document.getElementById('containerDay29')
        const newElement = document.createElement('i')
        newElement.classList.add('fas')
        newElement.classList.add('fa-heart')
        newElement.innerText = '❤'
        const x = e.clientX
        const y = e.clientY
        newElement.style.top = `${y}px`
        newElement.style.left = `${x}px`
        if(hearts){
            hearts?.appendChild(newElement)
            setTimeout(() => {
                newElement.remove()
            }, 10000);
        }
    }

    return (
        <div className="contenedorDia29">
            <div id="containerDay29" className="containerDay29">
                <h3>Double click on the image to 🧡 it</h3>
                <small>You liked it {likes} times</small>
                <img
                src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="img"
                className="imagen28"
                onDoubleClick={(e) => handleDoubleClick(e)}
                />
            </div>
        </div>
    );
}