// Log_view_page.js
import React from 'react';
import ProblemList from '../components/ProblemList';

function Log_view_page() {
    const problems = [
        { title: 'Problem 1', description: 'Description of problem 1' },
        { title: 'Problem 2', description: 'Description of problem 2' },
        { title: 'Problem 3', description: 'Description of problem 3' },
        // Make sure problems are changed to a fetch function that will display detials about the problems
    ];

    return (
        <div>
            
            <ProblemList problems={problems} />
        </div>
    );
}

export default Log_view_page;
