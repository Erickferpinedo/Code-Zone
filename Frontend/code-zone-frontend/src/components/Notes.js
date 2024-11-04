import React from 'react';
import './notes.css';

const Notes = () => {
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
          <div className="notes-lines">
            <div className="notes-line"></div>
            <div contenteditable="true"></div>
            <div className="notes-line"></div>
            <div contenteditable="true"></div>
            <div className="notes-line"></div>
            <div contenteditable="true"></div>
            <div className="notes-line"></div>
            <div contenteditable="true"></div>
            <div className="notes-line"></div>
            <div contenteditable="true"></div>
            <div className="notes-line"></div>
          </div>
        </div>
      </div>
    );
  };

export default Notes;
