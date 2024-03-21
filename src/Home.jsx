import { useState, useEffect } from 'react';
import './Home.css'
import data from './data.json'

export default function Home() {
    const days = data.days
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const basePath = '/Images/';
        const loadedImages = [];
        for (let i = 1; i <= 50; i++) {
            const imagePath = `${basePath}day${i}.jpeg`;
            loadedImages.push(imagePath);
            setImages(loadedImages)
        }
    }, []);

    return (
        <div className='home'>
            <div>
                <div className='home-head'>
                    <h2 className='home-title'>50 Proyectos 50 días</h2>
                    <div className='home-line'></div>
                </div>
                <div className='container-days'>
                    {
                        days.map((day) => (
                            <div key={day.day} className='card-days'>
                                <a href={day.href}>
                                    <div className='home-card'>
                                        <img src={images[day.day - 1]} alt='img not found' className='imageStyle'/>
                                    </div>
                                    <h4 className='home-card-title'>{day.day}. {day.title}</h4>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}