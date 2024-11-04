import React, { useState } from 'react';
import './log_info.css';

const Log_info = () => {
    const [selectedFace, setSelectedFace] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedQuestionType, setSelectedQuestionType] = useState("Select Type");

    const handleSelectFace = (face) => {
        setSelectedFace(face);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelectType = (type) => {
        setSelectedQuestionType(type);
        setIsDropdownOpen(false);
    };

    const questionTypes = ["Array", "Linked List", "Tree", "Graph", "Hash Table"];

    return (
        <div className='log_info'>
            <div className="difficulty-section">
                <div className='difficulty-title'>Difficulty</div>
                <div className='face-icons'>
                    <div
                        className={`face smiley ${selectedFace === 'smile' ? 'selected smiley-selected' : ''}`}
                        onClick={() => handleSelectFace('smile')}
                    >
                        <div className="face-mouth"></div>
                    </div>
                    <div
                        className={`face neutral ${selectedFace === 'neutral' ? 'selected neutral-selected' : ''}`}
                        onClick={() => handleSelectFace('neutral')}
                    >
                        <div className="face-mouth"></div>
                    </div>
                    <div
                        className={`face sad ${selectedFace === 'sad' ? 'selected sad-selected' : ''}`}
                        onClick={() => handleSelectFace('sad')}
                    >
                        <div className="face-mouth"></div>
                    </div>
                </div>
            </div>

            <div className='data-structure-alg'>
                <div className='data-structure-alg-title'>Question Type</div>
                <div className='data-structure-drop-down'>
                    <button onClick={toggleDropdown} className='dropdown-button'>
                        {selectedQuestionType}
                    </button>
                    {isDropdownOpen && (
                        <ul className='dropdown-menu'>
                            {questionTypes.map((type) => (
                                <li key={type} onClick={() => handleSelectType(type)}>
                                    {type}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="last-attempt-section">
                <div className='last-attempt-title'>Last Attempt</div>
                <div className='last-attempt-date'>XX/XX/XXXX</div>
            </div>
            <div className="next-reminder-section">
                <div className='next-reminder-title'>Next Reminder</div>
                <div className='next-reminder-date'>XX/XX/XXXX</div>
            </div>
        </div>
    );
};

export default Log_info;
