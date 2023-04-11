import { useRef, useState } from "react";
import "./Day27.css";

export default function Day27() {
    const button = useRef("button");
    const toasts = useRef("toasts");
    const noti = useRef(null);
    const [notif, setNotif] = useState([])

    console.log("noti", noti);

    const [messages /*setMessages*/] = useState([
        "Message One",
        "Message Two",
        "Message Three",
        "Message Four"
    ]);
    const [types /*setTypes*/] = useState(["info", "success", "error"]);

    function createNotification(message = null, type = null) {
        if(notif.length >= 0){
            noti.current.classList.add(type ? type : getRandomType());
            noti.current.classList.add("toasts");
            noti.current.innerText = message ? message : getRandomMessage();
            toasts.current.append(noti.current);
            setTimeout(() => {
                noti.current.remove();
            }, 3000);
    
            setNotif([...notif, noti.current.innerText])
        }

        console.log("notificacion", notif);
    }

    function getRandomMessage() {
        const mes = messages[Math.floor(Math.random() * 3)];
        return mes;
    }

    function getRandomType() {
        const tipo = types[Math.floor(Math.random() * 2)];
        return tipo;
    }

    function handleClick() {
        createNotification();
    }

    return (
        <div className="contenedorDia27">
            <div ref={toasts}>
                <div ref={noti}>
                    {
                    notif?.map((n) => (
                        n
                    ))
                    }
                </div>
            </div>
            <button className="btn27" ref={button} onClick={handleClick}>
                Show Notification
            </button>
        </div>
    );
}
