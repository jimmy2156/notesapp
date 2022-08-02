
import './App.css';
import Sidebar from './sidebar';
import Main from './main';
import { useEffect, useState } from 'react';
import {v4} from 'uuid';
 
function App() {
  const [notes, setnotes] = useState(JSON.parse(localStorage.notes) || [])
  const [activeNote, setactiveNote] = useState(false)
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])
  function addNotes() {
    const  newNote = {
      id: v4(),
      title: "Untitled note",
      body: "",
      lastModified: Date.now(),
    }
    setnotes([newNote, ...notes])
  }
  function onDeleteNote(idToDelete) {
    setnotes(notes.filter((notes) => notes.id !== idToDelete))
  }
  function onUpdateNote(updatedNote) {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
      return updatedNote
      }
    return note
    })
    setnotes(updatedNotesArray)
  }
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }
  return (
    <div className="App">
      <Sidebar notes={notes} addNotes={addNotes} onDeleteNote={onDeleteNote} activeNote={activeNote} setactiveNote={setactiveNote}/>
      <Main  activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
