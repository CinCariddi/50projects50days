import "./Style/Day15.css";
import { useState, useEffect } from "react";

export default function Day15() {
    const [twitter, setTwitter] = useState(0)
    const [youtube, setYoutube] = useState(0)
    const [facebook, setFacebook] = useState(0)

    const counter = () => {
        if (twitter < 12000 && youtube < 5000 && facebook < 7500) {
            for (let i = twitter; i <= 12000; i++) {
              setTimeout(() => setTwitter(i), (100))
            }
            for (let i = youtube; i <= 5000; i++) {
                setTimeout(() => setYoutube(i), (100))
            }
            for (let i = facebook; i <= 7500; i++) {
                setTimeout(() => setFacebook(i), (100))
            }
        }
    }

    useEffect(() => {
        counter();
    }, []);

    return (
        <div className="contenedorDia15" >
            <div className="counter-container">
                <div className="counter">{twitter}</div>
                <span>Twitter Followers</span>
            </div>
            <div className="counter-container">
                <div className="counter">{youtube}</div>
                <span>YouTube Subscribers</span>
            </div>
            <div className="counter-container">
                <div className="counter">{facebook}</div>
                <span>Facebook Fans</span>
            </div>
        </div>
    );
}