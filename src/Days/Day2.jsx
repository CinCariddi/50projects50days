import { useState } from 'react';
import './Day2.css'

export default function Day2(){
    const [currentStep, setCurrentStep] = useState(1);
    console.log(currentStep)
    
    const handleNext = () => {
        if (currentStep < 4 && currentStep >= 1) {
        setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className='contenedorDay2'>
            <div className="steps">
                <div className={`step ${currentStep >= 1? 'stepActive' : 'stepNotActive'}`}  id='1'>
                    1
                </div>
                <div className={`progress ${currentStep > 1 ? 'progressActive' : ''}`}></div>
                <div className={`step ${currentStep >= 2? 'stepActive' : 'stepNotActive'}`}  id='2'>
                    2
                </div>
                <div className={`progress1 ${currentStep > 2 ? 'progressActive1' : ''}`}></div>
                <div className={`step ${currentStep >= 3? 'stepActive' : 'stepNotActive'}`}  id='3'>
                    3
                </div>
                <div className={`progress2 ${currentStep > 3 ? 'progressActive2' : ''}`}></div>
                <div className={`step ${currentStep >= 4? 'stepActive' : 'stepNotActive'}`}  id='4'>
                    4
                </div>
            </div>
            <div>
                <button className={`btn2 ${currentStep >= 2? 'btnActive' : ''}`} onClick={handlePrevious}>Prev</button>
                <button className={`btn2 ${currentStep >= 1? 'btnActive' : ''}`} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}