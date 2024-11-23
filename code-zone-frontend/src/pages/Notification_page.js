import React, { useState } from 'react';
import Notification from '../components/Notification'; // Adjust path as needed
import RetryReminder from '../components/RetryReminder';
import './notification_page.css';

const NotificationPage = () => {    
  const [notifications] = useState([
    { title: "New Message", message: "Place holder Place Holder Place Holder Place Holder." },
    { title: "Update", message: "Your profile was updated successfully." },
  ]);

  const [retryData] = useState([
    {
      title: 'Array',
      description: 'Don’t forget to retry your unfinished task.',
      lastTested: '2024-11-10' // Example: 10th Nov 2024 (older than 3 days)
    },
    {
      title: 'Linked List',
      description: 'Please retry the previous task for better results.',
      lastTested: '2024-11-21' // Example: 21st Nov 2024 (within 3 days)
    },
    {
      title: 'Tree',
      description: 'It’s time to attempt this again.',
      lastTested: '2024-11-05' // Example: 5th Nov 2024 (older than 3 days)
    }
  ]);

  return (
    <div className="notification-page">
      {/* Retry Reminder List */}
      <div className="retry-box">
        <div className="retry-container">
          <h2>Retry Reminders</h2>
          <div className="retry-reminder-list">
            {retryData.map((reminder, index) => (
              <RetryReminder
                key={index}
                title={reminder.title}
                description={reminder.description}
                lastTested={reminder.lastTested}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Notifications Box */}
      <div className="notification-box">
        <div className="notification-container">
          <h2>Notifications</h2>
          {notifications.map((notif, index) => (
            <Notification key={index} title={notif.title} message={notif.message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;

//currently all of this is hard coded