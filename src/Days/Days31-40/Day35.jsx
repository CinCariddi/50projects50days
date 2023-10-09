import React, { useEffect, useState } from "react";
import "./Style/Day35.css";

export default function Day35() {
  const images = [
    "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
  ];
  const [image, setImage] = useState("");
  const [idx, setIdx] = useState(0);

  function changeImageNext() {
    if (idx < images.length && idx >= 0) {
      setImage(images[idx].toString());
      setIdx(idx + 1);
      if (idx === 3) {
        setIdx(0);
      }
    }
  }

  function changeImagePrev() {
    if (idx < images.length && idx > 0) {
      setImage(images[idx].toString());
      setIdx(idx - 1);
    } else if (idx === 0) {
      setImage(images[0].toString());
      setIdx(3);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (idx < images.length && idx >= 0) {
        setImage(images[idx].toString());
        setIdx(idx + 1);
        if (idx === 3) {
          setIdx(0);
        }
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [idx])

  return (
    <div className="contenedorDia35">
      <div className="carousel">
        <div className="image-container" id="imgs">
          <img src={image} alt="first-image" />
        </div>

        <div className="buttons-container">
          <button id="left" className="btn" onClick={changeImagePrev}>
            Prev
          </button>
          <button id="right" className="btn" onClick={changeImageNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}