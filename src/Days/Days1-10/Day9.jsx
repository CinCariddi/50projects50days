import './Style/Day9.css'
import { useState } from 'react';

export default function Day9() {
    const [currentAudio, setCurrentAudio] = useState(null);
    
    const playAudio = (fileName) => {
        if(currentAudio) {
            currentAudio.pause()
            setCurrentAudio(null)
        }
        const audio = new Audio(`${fileName}`);
        audio.play();
        setCurrentAudio(audio);
    };

    return(
        <div className='contenedorDia9'>
            <button className='btnDay9' onClick={() => playAudio('applause.mp3')}>
                Applause
                <audio src="applause.mp3"></audio>
            </button>
            <button className='btnDay9' onClick={() => playAudio('boo.mp3')}>
                Boo
                <audio src="boo.mp3"></audio>
            </button>
            <button className='btnDay9' onClick={() => playAudio('gasp.mp3')}>
                Gasp
                <audio src="gasp.mp3"></audio>
            </button>
            <button className='btnDay9' onClick={() => playAudio('tada.mp3')}>
                Tada
                <audio src="tada.mp3"></audio>
            </button>
            <button className='btnDay9' onClick={() => playAudio('victory.mp3')}>
                Victory
                <audio src="victory.mp3"></audio>
            </button>
            <button className='btnDay9' onClick={() => playAudio('wrong.mp3')}>
                Wrong
                <audio src="wrong.mp3"></audio>
            </button>
        </div>
    )
}