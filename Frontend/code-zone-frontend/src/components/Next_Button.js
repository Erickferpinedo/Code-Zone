import React from 'react';
import './next_button.css';

const Next_Button = () => {
    return (
        <div className="button-container">
            <button className="next_button">Save</button>
            <button className="delete_button">Delete</button>
        </div>
    );
};

export default Next_Button;
