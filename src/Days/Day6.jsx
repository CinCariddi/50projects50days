import './Day6.css'
import { useEffect, useState } from 'react';

export default function Dia6() {
    const [boxView, setBoxView] = useState([])
    const boxes = document.querySelectorAll('div.box')
    const [newBoxes, setNewBoxes] = useState([])
    const [triggerBottom, setTriggerBottom] = useState(0)

    console.log(boxView, triggerBottom, newBoxes)

    useEffect(() => {
        setTriggerBottom(window.scrollY)
        let test = []
        for (let i = 0; i < boxes.length ; i++) {
            test.push(boxes[i].getBoundingClientRect())
        }
        setNewBoxes(test)
        const handleScroll = () => {
            setTriggerBottom(window.scrollY)
            let actualInfo = window.scrollY + window.innerHeight
            for (let index = 0; index < newBoxes.length; index++) {
                const element = newBoxes[index];
                if(element.top < actualInfo && element.bottom > 0){
                    let cacheBoxes = boxView
                    cacheBoxes[index] = true
                    setBoxView(cacheBoxes)
                } else {
                    let cacheBoxes = boxView
                    cacheBoxes[index] = false
                    setBoxView(cacheBoxes)
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        
    }, [boxView]);



    return (
        <div className='contenedorDia6'>
            <h1>Scroll to see the animation</h1>
            <div className={`box ${boxView[0] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[1] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[2] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[3] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[4] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[5] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[6] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[7] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[8] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[9] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[10] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[11] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
            <div className={`box ${boxView[12] === true? 'boxOn' : 'boxOf'}`}><h2>Content</h2></div>
        </div>
    )
}