import { useRef, useState } from "react";
import "./Style/Day26.css";

export default function Day26() {
    const sliderContainer = useRef("sliderContainer");
    const slideRight = useRef("rightSlide");
    const slideLeft = useRef("leftSlide");
    const upButton = useRef("upButton");
    const downButton = useRef("downButton");
    const slidesLength = 4;
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const changeSlide = (direction) => {
        slideLeft.current.style.top = `-${(slidesLength - 1) * 100}vh`;
        const sliderHeight = sliderContainer.current.clientHeight;
        if (direction === "up") {
        setActiveSlideIndex(activeSlideIndex + 1);
            if (activeSlideIndex >= slidesLength - 1) {
                setActiveSlideIndex(0);
            }
        } else if (direction === "down") {
        setActiveSlideIndex(3);
            if (activeSlideIndex >= 1) {
                setActiveSlideIndex(activeSlideIndex - 1);
            }
        }
        slideRight.current.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight}px)`;
        slideLeft.current.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
        }px)`;
    };

    const handleUp = () => {
        changeSlide("up");
    };

    const handleDown = () => {
        changeSlide("down");
    };

    return (
        <div className="contenedorDia26">
            <div className="slider-container" ref={sliderContainer}>
                <div className="left-slide" ref={slideLeft}>
                <div style={{ backgroundColor: `#FD3555` }}>
                    <h1>Nature flower</h1>
                    <p>all in pink</p>
                </div>
                <div style={{ backgroundColor: `#2A86BA` }}>
                    <h1>Bluuue Sky</h1>
                    <p>with it's mountains</p>
                </div>
                <div style={{ backgroundColor: `#252E33` }}>
                    <h1>Lonely castle</h1>
                    <p>in the wilderness</p>
                </div>
                <div style={{ backgroundColor: `#FFB866` }}>
                    <h1>Flying eagle</h1>
                    <p>in the sunset</p>
                </div>
                </div>
                <div className="right-slide" ref={slideRight}>
                    <div
                        style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80)'`
                        }}
                    ></div>
                    <div
                        style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80)'`
                        }}
                    ></div>
                    <div
                        style={{
                        backgroundImage: ` url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80)'`
                        }}
                    ></div>
                    <div
                        style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80)'`
                        }}
                    ></div>
                </div>
                <div className="action-buttons">
                    <button className="down-button button26" ref={downButton} onClick={handleDown}>
                        <i className="fas fa-arrow-down">↓</i>
                    </button>
                    <button className="up-button button26" ref={upButton} onClick={handleUp}>
                        <i className="fas fa-arrow-up">↑</i>
                    </button>
                </div>
            </div>
        </div>
    );
}
