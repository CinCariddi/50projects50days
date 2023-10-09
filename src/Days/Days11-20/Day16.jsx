import { useState } from "react";
import "./Style/Day16.css";

export default function Day16() {
    const [smallCups, setSmallCups] = useState(0); //son 8
    const [liters, setLiters] = useState(250); //250 cada copa
    const [percentage, setPercentage] = useState(0); // 100% total --- 8 x---1= 12,5
    const [remained, setRemained] = useState(2000); // 2L - liters

    const vaso1 = () => {
        setSmallCups(0);
        setPercentage(0);
        if (smallCups < 1 && remained > 0) {
          setSmallCups(smallCups + 1);
          setPercentage(percentage + 12.5);
          setRemained(remained - liters);
        } else {
          setSmallCups(smallCups - 1);
          setPercentage(percentage - 12.5);
          setRemained(remained + liters);
        }
    };
    const vaso2 = () => {
        setSmallCups(1);
        setPercentage(12.5);
        if (smallCups < 2 && remained > 0) {
          setSmallCups(smallCups + 1);
          setPercentage(percentage + 12.5);
          setRemained(remained - liters);
        } else {
          setSmallCups(smallCups - 1);
          setPercentage(percentage - 12.5);
          setRemained(remained + liters);
        }
    };
    const vaso3 = () => {
        setSmallCups(2);
        setPercentage(25);
        if (smallCups < 3 && remained > 0) {
          setSmallCups(smallCups + 1);
          setPercentage(percentage + 12.5);
          setRemained(remained - liters);
        } else {
          setSmallCups(smallCups - 1);
          setPercentage(percentage - 12.5);
          setRemained(remained + liters);
        }
    };
    const vaso4 = () => {
        setSmallCups(3);
        setPercentage(37.5);
        if (smallCups < 4 && remained > 0) {
          setSmallCups(smallCups + 1);
          setPercentage(percentage + 12.5);
          setRemained(remained - liters);
        } else {
          setSmallCups(smallCups - 1);
          setPercentage(percentage - 12.5);
          setRemained(remained + liters);
        }
    };
    const vaso5 = () => {
        setSmallCups(4);
        setPercentage(50);
        if (smallCups < 5 && remained > 0) {
          setSmallCups(smallCups + 1);
          setPercentage(percentage + 12.5);
          setRemained(remained - liters);
        } else {
          setSmallCups(smallCups - 1);
          setPercentage(percentage - 12.5);
          setRemained(remained + liters);
        }
    };
    const vaso6 = () => {
        setSmallCups(5);
        setPercentage(62.5);
        if (smallCups < 6 && remained > 0) {
          setSmallCups(smallCups + 1);
          setPercentage(percentage + 12.5);
          setRemained(remained - liters);
        } else {
          setSmallCups(smallCups - 1);
          setPercentage(percentage - 12.5);
          setRemained(remained + liters);
        }
    };
    const vaso7 = () => {
        setSmallCups(6);
        setPercentage(75);
        if (smallCups < 7 && remained > 0) {
          setSmallCups(smallCups + 1);
          setPercentage(percentage + 12.5);
          setRemained(remained - liters);
        } else {
          setSmallCups(smallCups - 1);
          setPercentage(percentage - 12.5);
          setRemained(remained + liters);
        }
    };
    const vaso8 = () => {
        setSmallCups(7);
        setPercentage(87.5);
        if (smallCups < 8 && remained > 0) {
          setSmallCups(smallCups + 1);
          setPercentage(percentage + 12.5);
          setRemained(remained - liters);
        } else {
          setSmallCups(smallCups - 1);
          setPercentage(percentage - 12.5);
          setRemained(remained + liters);
        }
    };

    const porcentaje = {
        height: `${41.25 * smallCups}px`
    };

    const rem = {
        height: `${330 - 41.25 * smallCups}px`
    };

    return (
      <div className="contenedorDia16">
        <h1>Drink Water</h1>
        <h3>Goal: 2 Liters</h3>

        <div className="cup">
            <div className="remained" style={rem}>
            <span>{remained / 1000}L</span>
            <small>Remained</small>
            </div>
            <div className="percentage" style={porcentaje}>{percentage}%</div>
        </div>

        <p className="text">
            Select how many glasses of water that you have drank
        </p>

        <div className="cups">
            <div className={`cup cup-small ${smallCups >= 1 ?'full' : ''}`} onClick={vaso1}>250 ml</div>
            <div className={`cup cup-small ${smallCups >= 2 ?'full' : ''}`} onClick={vaso2}>250 ml</div>
            <div className={`cup cup-small ${smallCups >= 3 ?'full' : ''}`} onClick={vaso3}>250 ml</div>
            <div className={`cup cup-small ${smallCups >= 4 ?'full' : ''}`} onClick={vaso4}>250 ml</div>
            <div className={`cup cup-small ${smallCups >= 5 ?'full' : ''}`} onClick={vaso5}>250 ml</div>
            <div className={`cup cup-small ${smallCups >= 6 ?'full' : ''}`} onClick={vaso6}>250 ml</div>
            <div className={`cup cup-small ${smallCups >= 7 ?'full' : ''}`} onClick={vaso7}>250 ml</div>
            <div className={`cup cup-small ${smallCups >= 8 ?'full' : ''}`} onClick={vaso8}>250 ml</div>
        </div>
      </div>
    );
}