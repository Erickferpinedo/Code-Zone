import React, { useRef } from "react";
import "./notes.css";

const Notes = ({ notes, setNotes }) => {
  const notesRef = useRef();

  const handleBlur = () => {
    setNotes(notesRef.current.textContent);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <div className="notes-circle"></div>
        <div className="notes-circle"></div>
        <div className="notes-circle"></div>
        <div className="notes-circle"></div>
        <div className="notes-circle"></div>
      </div>
      <div className="notes-content">
        <p className="notes-title"># Notes</p>
        <div
          className="notes-lines"
          contentEditable="true"
          ref={notesRef}
          onBlur={handleBlur} // Update notes when user leaves the field
          suppressContentEditableWarning={true}
        >
          {notes}
        </div>
      </div>
    </div>
  );
};

export default Notes;
