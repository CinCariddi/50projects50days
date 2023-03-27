import { useState } from "react";
import "./Day13.css";

export default function Day13() {
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([]);
    console.log(inputValue, tags);

    function createTags(input) {
        const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());
    }

    function pickRandomTag() {
        const tags = document.querySelectorAll(".tag");
        return tags[Math.floor(Math.random() * tags.length)];
    }

    function highlightTag(tag) {
        tag.classList.add('highlight');
    }
    
    function unHighlightTag(tag) {
        tag.classList.remove('highlight');
    }
    
    function randomSelect() {
        const times = 30;
    
        const interval = setInterval(() => {
          const randomTag = pickRandomTag();
    
          if (randomTag !== undefined) {
            highlightTag(randomTag);
    
            setTimeout(() => {
              unHighlightTag(randomTag);
            }, 100);
          }
        }, 100);
    
        setTimeout(() => {
          clearInterval(interval);
    
          setTimeout(() => {
            const randomTag = pickRandomTag();
    
            if (randomTag !== undefined) {
              highlightTag(randomTag);
            }
          }, 100);
        }, times * 100);
    }

    console.log(tags)

    return (
        <div className="contenedorDia13">
            <div className="containerDay13">
                <div className="text">
                    <h3>Enter all of the choices divided by a comma (',').</h3>
                    <h3>Press enter when you're done</h3>
                </div>
                <textarea
                    value={inputValue}
                    placeholder="Enter choices here..."
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        setTags(e.target.value
                            .split(",")
                            .filter((tag) => tag.trim() !== "")
                            .map((tag) => tag.trim()))
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            createTags(inputValue);
                            setInputValue("");
                            randomSelect();
                        }
                    }}
                />
                <div id="tags">
                    {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    );
}