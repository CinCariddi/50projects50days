import "./Style/Day24.css";
import { useRef, useEffect } from "react";

export default function Day24() {
    const header = useRef(null);
    const title = useRef(null);
    const excerpt = useRef(null);
    const profile_img = useRef(null);
    const name = useRef(null);
    const date = useRef(null);
    

    function getData() {
        const animated_bgs = document.querySelectorAll(".animated-bg");
        const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
        
        header.current.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
        title.current.innerHTML = "Lorem ipsum dolor sit amet";
        excerpt.current.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
        profile_img.current.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
        name.current.innerHTML = "John Doe";
        date.current.innerHTML = "Oct 08, 2020";

        animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
        animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text")); 
    }

    useEffect(() => {
        window.addEventListener("load", () => setTimeout(getData, 2500));
        return () => {
            window.removeEventListener("load", getData);
        };
    }, []);

    return (
        <div className="contenedorDia24">
            <div className="card24">
                <div className="card-header animated-bg" ref={header}>
                    &nbsp;
                </div>
                <div className="card-content">
                    <h3 className="card-title animated-bg animated-bg-text" ref={title}>
                        &nbsp;
                    </h3>
                <p className="card-excerpt" ref={excerpt}>
                    &nbsp;
                    <span className="animated-bg animated-bg-text">&nbsp;</span>
                    <span className="animated-bg animated-bg-text">&nbsp;</span>
                    <span className="animated-bg animated-bg-text">&nbsp;</span>
                </p>
                <div className="author">
                    <div className="profile-img animated-bg" ref={profile_img}>
                        &nbsp;
                    </div>
                    <div className="author-info">
                        <strong className="animated-bg animated-bg-text" ref={name}>
                            &nbsp;
                        </strong>
                        <small className="animated-bg animated-bg-text" ref={date}>
                            &nbsp;
                        </small>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}