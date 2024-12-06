function getAllStats(){
    const statisticData = [
        {
            name: "Completion",
            description: "This is your ratio of completed Leetcode logs to currently incompleted Leetcode logs.",
            data:{
                questionsTotal: 50,
                questionsCompleted: 37
            },
        },
        {
            name: "Streak",
            description: "This is current streak of consecutive days of completeing your logs.",
            data:{
                days: 8,
            },
        },
        {
            name: "Easy/Medium/Hard",
            description: "This is your ratio of easy, medium and hard questions.",
            data:{
                questionsTotalCompleted: 37,
                easyQuestions: 12,
                mediumQuestions: 13,
                hardQuestions: 12,
            },
        },
        {
            name: "Activeness",
            description: "This is how active you were on these days. Dunno use this https://www.npmjs.com/package/react-activity-calendar.",
            data:{
                INCOMPLETEDATA: "this data is not done yet! not even for mock ups! please do not use yet!"
            },
        },
    ];

    return statisticData;
}

export {getAllStats};