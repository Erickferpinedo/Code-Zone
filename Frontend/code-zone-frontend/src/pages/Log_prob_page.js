// Log_prob_page.js
import React, { useState } from 'react';
import Notes from '../components/Notes';
import Next_Button from '../components/Next_Button';
import Question from '../components/Question';
import Log_Info from '../components/Log_Info';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './log_prob_page.css';

function Log_prob_page() {


    return (
        <>
            <div className="Log_prob_page">
                <Question />
                <div className="content">
                    <Log_Info />
                    <Notes />
                </div>
                <Next_Button />
            </div>
        </>
    );
}

export default Log_prob_page;
