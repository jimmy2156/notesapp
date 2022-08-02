
import reactMarkdown from "react-markdown";


export default function Main({ activeNote, onUpdateNote}) {
  function onEditField(key, value) {
   onUpdateNote({
  ...activeNote,
    [key]: value,
    lastModified: Date.now()
   })
  }
  
  if (!activeNote) return <div className="no-active-note">No Active Note</div>;
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
          <input type="text" id="title" value={activeNote.title} onChange={(event) => onEditField("title", event.target.value)} autoFocus />
          <textarea name="" id="body" cols="30" rows="10" placeholder="Write your note here..." value={activeNote.body} onChange={(event) => onEditField("body", event.target.value)}></textarea>
            </div>
            <div className="app-main-note-preview">
          <h1 className="preview-title">{activeNote.title}</h1>
          <reactMarkdown className="markdown-preview">{activeNote.body}</reactMarkdown>
            </div>
        </div>
    )
}