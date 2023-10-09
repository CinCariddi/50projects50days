import './Style/Day4.css'
import { useState } from 'react'

export default function Day4() {
    const [search, setSearch] = useState(false)

    const handleClick = () => {
        if(search === true){
            setSearch(false)
        }else {
            setSearch(true)
        }
    }

    return(
        <div className='body4'>
            <div className='searchDay4'>
                {
                    search === true ? 
                    <input type="text" className='inputDia4' placeholder="Search..."/>
                    : <div></div>
                }
                <button className="btnDia4" onClick={() => handleClick()}>
                    <i>🔍︎</i>
                </button>
            </div>
        </div>
    )
}