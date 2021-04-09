import "./App.css"
import React, {useState, useEffect} from "react"

const Note = ({note}) => {
    return (
        <div>
            <p>
                {" "}
                {note.content} {note.date}
            </p>
        </div>
    )
}

function App({notes}) {
    const [allNotes, setNotes] = useState(notes)
    const [newNote, setNewNote] = useState("")
    const displayNotes = allNotes.map((item) => (
        <Note note={item} key={item.id} />
    ))

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }
    const addNewNote = (event) => {
        event.preventDefault()
        const noteToBeAdded = {
            id: allNotes.length + 1,
            content: newNote,
            important: false,
            date: new Date().toString()
        }
        setNotes(allNotes.concat(noteToBeAdded))
        // console.log("going to add ", noteToBeAdded)
    }
    return (
        <div className="App">
            {displayNotes}
            <form onSubmit={addNewNote}>
                {" "}
                <input value={newNote} onChange={handleNoteChange} />{" "}
                <button type="submit"> add note </button>{" "}
            </form>
        </div>
    )
}

export default App
