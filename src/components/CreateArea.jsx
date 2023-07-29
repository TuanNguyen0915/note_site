import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isClick, setClick] = useState(false);

  function handleOnChange(event) {
    const { name, value } = event.target;
    return setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function expandContent() {
    setClick(true);
  }
  function addNoteToList(event) {
    setClick(false);
    props.addNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div onClick={expandContent}>
      <form>
        <input onChange={handleOnChange} name="title" value={note.title} placeholder="Title" />
        {isClick ? (
          <>
            <textarea
              onChange={handleOnChange}
              name="content"
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
            <div className="add-note">
              <Fab onClick={addNoteToList}>
                <AddIcon className="add-note" />
              </Fab>
            </div>
          </>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
