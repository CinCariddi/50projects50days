import { useRef, useState } from "react";
import "./Day27.css";

export default function Day27() {
    const button = useRef("button");
    const toasts = useRef("toasts");
    const noti = useRef(null);

    console.log("notificacion", noti);

    const [messages /*setMessages*/] = useState([
        "Message One",
        "Message Two",
        "Message Three",
        "Message Four"
    ]);
    const [types /*setTypes*/] = useState(["info", "success", "error"]);

    function createNotification(message = null, type = null) {
        noti.current.classList.add(type ? type : getRandomType());
        noti.current.classList.add("toast");
        noti.current.innerText = message ? message : getRandomMessage();
        toasts.current.append(noti.current);
        console.log("noti", noti);
        setTimeout(() => {
        noti.current.remove();
        }, 3000);
    }

    function getRandomMessage() {
        const mes = messages[Math.floor(Math.random() * 3)];
        console.log("mensaje", mes);
        return mes;
    }

    function getRandomType() {
        const tipo = types[Math.floor(Math.random() * 2)];
        console.log("tipo", tipo);
        return tipo;
    }

    function handleClick() {
        createNotification();
    }

    return (
        <div className="contenedorDia27">
        <div ref={toasts}>
            <div ref={noti}></div>
        </div>
        <button className="btn" ref={button} onClick={handleClick}>
            Show Notification
        </button>
        </div>
    );
}
