
import React from 'react';
import './problemItem.css';

function ProblemItem({ title, description }) {
    return (
        <div className="problem-item">
            <h3 className="problem-title">{title}</h3>
            <p className="problem-description">{description}</p>
        </div>
    );
}

export default ProblemItem;
