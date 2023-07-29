import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Add newNote to list by clicking "add" button
  const [notes, setNotes] = useState([]);
  function addToNotes(newNote) {
    return setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }
  // Delete note by index
  function deleteNote(id) {
    return setNotes((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addToNotes} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notes.map((note, index) => (
        <Note onDelete={deleteNote} index={index} id={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
