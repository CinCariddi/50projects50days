import { useState } from 'react'
import './Day5.css'
import { useEffect } from 'react';

export default function Dia4() {
    const [count, setCount] = useState(30)
    const [count2, setCount2] = useState(1)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(count > 0){
                setCount(prevProgress => prevProgress - 1);
            }
        }, 25);

        const interval2 = setInterval(() => {
            if(count2 > 0){
                setCount2(prevProgress => prevProgress.toFixed(2) - 0.1);
            }
        }, 25);
        return () => { 
            clearInterval(interval)
            clearInterval(interval2)
        }
    }, [count, count2]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(percent < 100 ){
                setPercent(progress => progress + 1)
            }
        }, 29);
        return () => clearInterval(interval);
    }, [percent]);

    const style = {
        filter: `blur(${count}px)`,
        transition: 'filter 3s ease-in-out'
    };

    const styleNumber = {
        opacity: `${count2}`,
        transition: 'opacity 3s ease-in-out'
    }

    return(
        <div className="contenedorDia5">
            <div>
                <img style={style} className='loadingImage' src="https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80" alt="img" />
                <div className="loading-text" style={styleNumber}>{`${percent}%`}</div>
            </div>
        </div>
    )
}