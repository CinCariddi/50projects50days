import React, { useEffect, useState } from "react";
import "./Style/Day33.css";

export default function Day33() {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );

    function createNote() {
        const newNote = {
            id: Date.now(),
            text: '',
            edit: true
        };
        setNotes([...notes, newNote]);
    }

    function deleteNote(id) {
        setNotes(notes.filter((note) => note.id !== id));
    };

    function editNote(id, newText, edit) {
        setNotes(
          notes.map((note) =>
            note.id === id ? { ...note, text: newText, edit: !edit } : note
          )
        );
    };

    useEffect(() => {
        const oldNotes = notes.filter((note) => note.text !== '')
        localStorage.setItem("notes", JSON.stringify(oldNotes));
    }, [notes]);

    return (
        <div className="contenedorDia33">
            <div className="notepad">
                <div className="main">
                    <button className="add" onClick={createNote}>
                        <img
                        src="https://img.icons8.com/office/256/plus--v1.png"
                        alt="img"
                        className="imgPlus"
                        />
                        Add note
                    </button>
                </div>
                {notes.map((note, i) => (
                    <div className="note" key={note.id}>
                        <div className="tools">
                            <button className="edit" onClick={() => editNote(note.id, note.text, note.edit)}>
                                <img
                                src="https://img.icons8.com/laces/256/edit.png"
                                alt="img"
                                className="imgPlus"
                                />
                            </button>
                            <button className="delete" onClick={() => deleteNote(note.id)}>
                                <img
                                src="https://img.icons8.com/carbon-copy/256/filled-trash.png"
                                alt="img"
                                className="imgPlus"
                                />
                            </button>
                        </div>
                        {
                            note.edit === true 
                            ?
                            <textarea
                            value={notes[i].text}
                            onChange={(e) => {
                                const updatedNotes = notes.map((noteItem, index) =>
                                    index === i ? { ...noteItem, text: e.target.value } : noteItem
                                );
                                setNotes(updatedNotes);
                            }}
                            ></textarea>
                            :
                            <div className="main">{note.text}</div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}