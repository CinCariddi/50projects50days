import './Style/Day1.css'
import { useState } from 'react'

export default function Day1() {
    const [activeDiv, setActiveDiv] = useState(1);

    const handleDivClick = (id) => {
        setActiveDiv(id === activeDiv ? 1 : id);
    };

    return(
        <div className='contenedor'>
            <div className={`imagen1 ${activeDiv === 1? 'active' : 'notActive'}`} onClick={() => handleDivClick(1)}>
                <h3>Explore The World</h3>
            </div>
            <div className={`imagen2 ${activeDiv === 2? 'active' : 'notActive'}`} onClick={() => handleDivClick(2)}>
                <h3>Wild Forest</h3>
            </div>
            <div className={`imagen3 ${activeDiv === 3? 'active' : 'notActive'}`} onClick={() => handleDivClick(3)}>
                <h3>Sunny Beach</h3>
            </div>
            <div className={`imagen4 ${activeDiv === 4? 'active' : 'notActive'}`} onClick={() => handleDivClick(4)}>
                <h3>City on Winter</h3>
            </div>
            <div className={`imagen5  ${activeDiv === 5 ? 'active' : 'notActive'}`} onClick={() => handleDivClick(5)}>
                <h3>Mountains - Clouds</h3>
            </div>
        </div>
    )
}