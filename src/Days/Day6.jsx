import './Day6.css'
import { useEffect,useRef } from 'react';

export default function Day6() {
    const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    console.log(element)
    if (element) {
      element.classList.add('active6');
    }
  }, []);

  return (
    <div className="contenedorDia6">
      <h1>Scroll to see the animation</h1>
      <div className="boxRight" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxLeft" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxRight" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxLeft" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxRight" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxLeft" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxRight" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxLeft" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxRight" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxLeft" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxRight" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxLeft" ref={elementRef}>
        <h2>Content</h2>
      </div>
      <div className="boxRight" ref={elementRef}>
        <h2>Content</h2>
      </div>
    </div>
  );
}