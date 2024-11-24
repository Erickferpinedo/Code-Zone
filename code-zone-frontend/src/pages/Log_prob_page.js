/* eslint-disable react/jsx-pascal-case */
// Log_prob_page.js
import React, { useState } from 'react';
import Notes from '../components/log-prob-components/Notes';
import Next_Button from '../components/log-prob-components/Next_Button';
import Question from '../components/log-prob-components/Question';
import Log_Info from '../components/log-prob-components/Log_Info';
import './log_prob_page.css';

function Log_prob_page() {
    const [selectedFace, setSelectedFace] = useState(null);
    const [selectedQuestionType, setSelectedQuestionType] = useState("Select Type");
    const [lastAttemptDate, setLastAttemptDate] = useState(null);
    const [nextReminderDate, setNextReminderDate] = useState(null);
    const [questionName, setQuestionName] = useState(null);
    const [questionDescription, setQuestionDescription] = useState(null);

    return (
        <>
            <div className="Log_prob_page">
                <Question 
                    questionName={questionName}
                    setQuestionName={setQuestionName}
                    questionDescription={questionDescription}
                    setQuestionDescription={setQuestionDescription}
                />
                <div className="content">
                    <Log_Info
                        selectedFace={selectedFace}
                        setSelectedFace={setSelectedFace}
                        selectedQuestionType={selectedQuestionType}
                        setSelectedQuestionType={setSelectedQuestionType}
                        lastAttemptDate={lastAttemptDate}
                        setLastAttemptDate={setLastAttemptDate}
                        nextReminderDate={nextReminderDate}
                        setNextReminderDate={setNextReminderDate}
                    />
                    <Notes />
                </div>
                <Next_Button
                    inputQuestionDescription={questionDescription}
                    inputQuestionName={questionName}
                    selectedFace={selectedFace}
                    selectedQuestionType={selectedQuestionType}
                    lastAttemptDate={lastAttemptDate}
                    nextReminderDate={nextReminderDate}
                />
            </div>
        </>
    );
}

export default Log_prob_page;
