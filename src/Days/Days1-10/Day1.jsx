import './Style/Day1.css'
import { useState } from 'react'

export default function Day1() {
    const [activeDiv, setActiveDiv] = useState(1);

    const handleDivClick = (id) => {
        setActiveDiv(id === activeDiv ? 1 : id);
    };

    return(
        <div className='contenedorDay1'>
            <div className={`imagen1Day1 ${activeDiv === 1? 'activeDay1' : '"notActiveDay1'}`} onClick={() => handleDivClick(1)}>
                <h3>Explore The World</h3>
            </div>
            <div className={`imagen2Day1 ${activeDiv === 2? 'activeDay1' : '"notActiveDay1'}`} onClick={() => handleDivClick(2)}>
                <h3>Wild Forest</h3>
            </div>
            <div className={`imagen3Day1 ${activeDiv === 3? 'activeDay1' : '"notActiveDay1'}`} onClick={() => handleDivClick(3)}>
                <h3>Sunny Beach</h3>
            </div>
            <div className={`imagen4Day1 ${activeDiv === 4? 'activeDay1' : '"notActiveDay1'}`} onClick={() => handleDivClick(4)}>
                <h3>City on Winter</h3>
            </div>
            <div className={`imagen5Day1  ${activeDiv === 5 ? 'activeDay1' : '"notActiveDay1'}`} onClick={() => handleDivClick(5)}>
                <h3>Mountains - Clouds</h3>
            </div>
        </div>
    )
}