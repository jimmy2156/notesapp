


export default function Sidebar(props) {
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={props.addNotes}>Add</button>
            </div>
<div className="app-sidebar-notes">
    { props.notes.map(note => (
    <div className={`app-sidebar-note ${note.id === props.activeNote && "active"}`} onClick={() => props.setactiveNotes(note.id)}>
        <div className="sidebar-note-title">
            <strong>{note.title}</strong>
            <button onClick={() => props.onDeleteNote(note.id)}>Delete</button>
        </div>
        <p>{note.body && note.body.substr(0, 100) + "..."}</p>
        <small class="note-meta">
            Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit"
            })}
        </small>
        
    </div>))}
</div>
        </div>
    )
}