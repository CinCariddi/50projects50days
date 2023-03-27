import "./Day14.css";
import { useState } from "react";

export default function Day14() {
    const [navActive, setNavActive] = useState(false)
    
    function navActivo() {
        if(navActive === false){
            setNavActive(true)
        } else {
            setNavActive(false)
        }
    }
  
    return (
      <div className="contenedorDia14">
        <nav className={`${navActive ?'active2' : ''}`} id="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="icon" id="toggle" onClick={navActivo}>
            <div className="line line1"></div>
            <div className="line line2"></div>
          </button>
        </nav>
      </div>
    );
}