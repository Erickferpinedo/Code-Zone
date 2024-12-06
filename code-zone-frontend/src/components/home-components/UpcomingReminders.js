import React from "react";
import "./UpcomingReminders.css";

const UpcomingReminders = () => {
  // Placeholder LeetCode reminders
  const reminders = [
    "Solve 'Two Sum' problem by Friday",
    "Attempt 'Binary Search' challenge",
    "Review 'Dynamic Programming' notes",
    "Practice 'ThreeSum' for next week",
    "Debug the 'Palindrome Partitioning' solution",
  ];

  return (
    <div className="upcomingRemindersSection">
      <div className="headerForStatsAndReminders">
        <h1 className="sectionHeadersHome">Upcoming Reminders</h1>
      </div>
      <div className="remindersGrid">
        {reminders.length > 0 ? (
          reminders.map((reminder, index) => (
            <div key={index} className="reminderCard">
              <p>{reminder}</p>
            </div>
          ))
        ) : (
          <p className="noRemindersMessage">No reminders at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingReminders;
