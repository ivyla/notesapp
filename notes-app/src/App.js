import "./App.css"

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
    const allNotes = notes.map((item) => <Note note={item} />)
    return <div className="App">{allNotes} hello world</div>
}

export default App
