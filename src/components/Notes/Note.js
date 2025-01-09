import React, { useState } from "react";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const Note = (props) => {
  const { toggleModal, note, setSelectedNote } = props;
  const [isHover, setIsHover] = useState(false);

  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote(note);
  };

  const hoverOverHandler = () => {
    setIsHover(true);
  };

  const hoverOutHandler = () => {
    setIsHover(false);
  };

  const deleteHandler = () => {
    toggleModal(false);
    props.deleteNote(note.id);
  };

  return (
    <div
      className="note"
      id={note.id}
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
      style={{ width: 400 }}
    >
      {isHover && <CheckCircleOutlineOutlinedIcon style={{ color: "grey" }} />}

      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>

      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <AddAlertOutlinedIcon style={{ color: "grey", marginRight: 20 }} />
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <PersonAddAlt1OutlinedIcon
            style={{ color: "grey", marginRight: 20 }}
          />
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <PaletteOutlinedIcon style={{ color: "grey", marginRight: 20 }} />
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <ImageOutlinedIcon style={{ color: "grey", marginRight: 20 }} />
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler}>
          <ArchiveOutlinedIcon style={{ color: "grey", marginRight: 20 }} />
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <MoreVertOutlinedIcon style={{ color: "grey", marginRight: 20 }} />
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;