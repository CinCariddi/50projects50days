import { useState } from 'react'
import './Style/Day10.css'

export default function Day10() {
    const [joke, setJoke] = useState('')

    async function generateJoke() {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }
        const res = await fetch('https://icanhazdadjoke.com', config)
        const data = await res.json()
        setJoke(data.joke)
    }

    return(
        <div className="contenedorDia10">
            <div className="containerDay10">
                <h3>Don't Laugh Challenge</h3>
                <div className="joke">{joke}</div>
                <button className="btnDay10" onClick={generateJoke}>Get Another Joke</button>
            </div>
        </div>
    )
}