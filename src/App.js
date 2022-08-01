
import './App.css';
import Sidebar from './sidebar';
import Main from './main';
import { useState } from 'react';
import {v4} from 'uuid';
 
function App() {
  const [notes, setnotes] = useState([])
  const [activeNote, setactiveNote] = useState(false)
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
  function onUpdateNote()
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }
  return (
    <div className="App">
      <Sidebar notes={notes} addNotes={addNotes} onDeleteNote={onDeleteNote} activeNote={activeNote} setactiveNote={setactiveNote}/>
      <Main  activeNote={getActiveNote}/>
    </div>
  );
}

export default App;
