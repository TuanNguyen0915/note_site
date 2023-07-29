import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function handleOnChange(event) {
    const { name, value } = event.target;
    return setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function handleOnClick(event) {
    props.addNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange={handleOnChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handleOnChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={handleOnClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
