import { useRef, useEffect } from "react";
import "./Style/Day25.css";

export default function Day25() {
    const nav = useRef("nav");

    function fixNav() {
        if (window.scrollY > nav.current.offsetHeight + 150) {
            nav.current.classList.add("active25");
            console.log('nav', nav, window.scrollY);
        } 
        else {
            nav.current.classList.remove("active25");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", fixNav);
    }, []);

    return (
        <div className="contenedorDia25">
            <nav className="navDay25" ref={nav}>
                <div className="containerDay25">
                    <h1 className="logo">
                        <a href="#">My Website</a>
                    </h1>
                    <ul>
                        <li>
                            <a href="#" className="current">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="hero">
                <div className="containerDay25">
                    <h1>Welcome To My Website</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
                        consequuntur?
                    </p>
                </div>
            </div>
            <section className="containerDay25 content">
                <h2>Content One</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
                    dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
                    quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
                    officia aperiam corporis similique. Facilis quos tempore labore totam!
                    Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
                    modi dolorem sit architecto, voluptate magni sunt unde est quas?
                    Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
                    libero laboriosam ab eligendi omnis delectus earum labore, placeat
                    officiis sint illum rem voluptas ipsum repellendus iste eius
                    recusandae quae excepturi facere, iure rerum sequi? Illum velit
                    delectus dicta et iste dolorum obcaecati minus odio eligendi!
                </p>
                <h3>Content Two</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
                    provident nostrum possimus inventore nisi laboriosam consequatur modi
                    nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
                    provident, voluptates illo odio nostrum minima beatae similique a sint
                    sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
                    quae iste aperiam hic cumque repellat?
                </p>
            </section>
        </div>
    );
}