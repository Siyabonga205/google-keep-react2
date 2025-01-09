import React, { useState } from "react";
import "./Form.css";
import { uid } from "uid";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PaletteIcon from "@mui/icons-material/Palette";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BrushIcon from "@mui/icons-material/Brush";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Form = (props) => {
  const { edit, selectedNote, toggleModal } = props;
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!edit) {
      props.addNote({
        id: uid(),
        title,
        text,
      });
      setIsActiveForm(false);
    } else {
      props.editNote({
        id: selectedNote.id,
        title,
        text,
      });
      toggleModal();
    }

    setTitle("");
    setText("");
  };

  const formClickHandler = () => {
    setIsActiveForm(true);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          onSubmit={submitFormHandler}
          className={isActiveForm ? "form" : ""}
        >
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />

          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <AddAlertIcon className="brush" />
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <PersonAddAltIcon className="brush" />
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <PaletteIcon className="brush" />

                  <span className="tooltip-text">Change Color</span>
                </div>
                <div className="tooltip">
                  <ImageIcon className="brush" />
                  <span className="tooltip-text">Add Image</span>
                </div>
                <div className="tooltip">
                  <ArchiveIcon className="brush" />
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <MoreVertIcon className="brush" />
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <UndoIcon className="brush" />
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <RedoIcon className="brush" />
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button type="submit" className="close-btn">
                Close
              </button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <CheckBoxIcon className="checkbox" />
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <BrushIcon className="brush" />
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <ImageIcon className="image" />
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;

//
//
//
//
//
//