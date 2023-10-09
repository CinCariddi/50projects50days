import { useRef } from "react";
import "./Style/Day45.css";

export default function Day45() {
    const open_btn = useRef("open");
    const close_btn = useRef("close");

    function handleOpen() {
        const nav = document.querySelectorAll(".nav");
        console.log("open", open_btn, close_btn, nav);
        nav.forEach((nav_el) => nav_el.classList.add("visible"));
    }

    function handleClose() {
        const nav = document.querySelectorAll(".nav");
        console.log("open", open_btn, close_btn, nav);
        nav.forEach((nav_el) => nav_el.classList.remove("visible"));
    }

    return (
        <div className="contenedorDia45">
            <button className="nav-btn open-btn" onClick={handleOpen} ref={open_btn}>
                <img src='https://img.icons8.com/?size=512&id=OTxpMqWbm71F&format=png' alt='=' style={{height:'40px', width:'40px'}}/>
            </button>
            <img
                src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                alt="Logo"
                className="logo"
            />
            <p className="text">Mobile Navigation</p>
            <div className="nav nav-black">
                <div className="nav nav-red">
                    <div className="nav nav-white">
                        <button
                        className="nav-btn close-btn"
                        ref={close_btn}
                        onClick={handleClose}
                        >
                            <img src='https://img.icons8.com/?size=512&id=ZV8D2YZ6852I&format=png' alt='X' style={{height:'40px', width:'40px'}}/>
                        </button>
                        <img
                        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                        alt="Logo"
                        className="logo"
                        />
                        <ul className="list">
                            <li>
                                <a href="#">Teams</a>
                            </li>
                            <li>
                                <a href="#">Locations</a>
                            </li>
                            <li>
                                <a href="#">Life at Netflix</a>
                            </li>
                            <li>
                                <ul>
                                <li>
                                    <a href="#">Netflix culture memo</a>
                                </li>
                                <li>
                                    <a href="#">Work life balance</a>
                                </li>
                                <li>
                                    <a href="#">Inclusion & diversity</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}