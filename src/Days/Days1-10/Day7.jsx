import { useState } from 'react'
import './Style/Day7.css'

export default function Day7() {
    const [left, setLeft] = useState('');
    const [right, setRight] = useState('');

    function agregarClase() {
        setLeft('hover-left');
        setRight('OfHover-right');
    }
    
    function agregarClase2() {
        setRight('hover-right');
        setLeft('OfHover-left');
    }

    function quitarClase() {
        setLeft('');
        setRight('');
    }


    return (
        <div className='contenedorDia7'>
            <div className={`splitLeft ${left}`} onMouseOver={agregarClase} onMouseOut={quitarClase}>
                <div className='left'>
                    <h1>Playstation 5</h1>
                    <a href="#" className="btnDia7">Buy Now</a>
                </div>
            </div>
            <div className={`splitRight ${right}`} onMouseOver={agregarClase2} onMouseOut={quitarClase}>
                <div className='right'>
                    <h1>XBox Series X</h1>
                    <a href="#" className="btnDia7">Buy Now</a>
                </div>
            </div>
        </div>
    )
}