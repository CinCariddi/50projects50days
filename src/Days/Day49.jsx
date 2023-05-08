import { useState, useEffect } from "react";
import "./Day49.css";

export default function Day48() {
    const [todo, setTodo] = useState(
        JSON.parse(localStorage.getItem("todo")) || []
    )
    const [completed, setCompleted] = useState(false)

    function addTodo() {
        const input = document.getElementById("input");
        let todoText = input.value;
        setTodo([...todo, todoText])
    }

    function handleClick() {
        const list = document.getElementById('list')
        if(completed === false) {
            list.classList.add('completed')
            setCompleted(true)
        }else {
            list.classList.remove('completed')
            setCompleted(false)
        }
    }

    function handleSudmit(e) {
        e.preventDefault();
        addTodo();
    }

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
    }, [todo]);

    return (
        <div className="contenedorDia49">
            <h1>ToDos</h1>
            <form id="form" onSubmit={(e) => handleSudmit(e)}>
                <input
                    type="text"
                    className="input"
                    id="input"
                    placeholder="Enter your todo"
                />
                {
                    todo?.map((td) => (
                        <ul className="todos" id="todos">
                            <li id="list" onClick={handleClick}>{td}</li>
                        </ul>
                    ))
                }
            </form>
            <small>
                Left click to toggle completed. <br /> Right click to delete todo
            </small>
        </div>
    );
}