import { useRef, useState } from "react";
import "./Day29.css";

export default function Day29() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false)
    const heart = useRef('heart-animation')

    function handleDoubleClick(e) {
        setLikes(likes + 1);
        createHeart(e)
    }

    const createHeart = (e) => {
        console.log('e', e)
        console.log('heart', heart)
        setLiked(true);
        const x = e.clientX
        const y = e.clientY
        heart.current.style.top = `${y}px`
        heart.current.style.left = `${x}px`
        setTimeout(() => {
            setLiked(false);
        }, 3000);
    }

    return (
        <div className="contenedorDia29">
            <div className="containerDay29">
                <h3>Double click on the image to 🧡 it</h3>
                <small>You liked it {likes} times</small>
                <img
                src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="img"
                className="imagen28"
                onDoubleClick={(e) => handleDoubleClick(e)}
                />
                {liked && (
                    <div className="heart-animation" ref={heart}>
                        <i className="fas fa-heart">❤</i>
                    </div>
                )}
            </div>
        </div>
    );
}