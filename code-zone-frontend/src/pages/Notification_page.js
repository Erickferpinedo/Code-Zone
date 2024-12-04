import React, { useState, useEffect } from "react";
import Notification from "../components/notification-components/Notification"; // Adjust path as needed
import RetryReminder from "../components/notification-components/RetryReminder";
import "./notification_page.css";
import { getEmails } from "../apiServices/emailService";

const NotificationPage = () => {
  const [notifications] = useState([
    {
      title: "New Message",
      message: "Place holder Place Holder Place Holder Place Holder.",
    },
    { title: "Update", message: "Your profile was updated successfully." },
  ]);

  const [retryData, setRetryData] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const emails = await getEmails(); // Fetch emails from API
        setRetryData(emails); // Update the state with fetched emails
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="notification-page">
      {/* Retry Reminder List */}
      <div className="retry-box">
        <div className="retry-container">
          <h2>Retry Reminders</h2>
          <div className="retry-reminder-list">
            {retryData.length === 0 ? (
              <h3>No Reminders Currently Set</h3>
            ) : (
              retryData.map((reminder, index) => (
                <RetryReminder
                  key={index}
                  title={reminder.data.subject}
                  description={reminder.data.message}
                  lastTested={reminder.nextRunAt}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Notifications Box */}
      <div className="notification-box">
        <div className="notification-container">
          <h2>Notifications</h2>
          {notifications.map((notif, index) => (
            <Notification
              key={index}
              title={notif.title}
              message={notif.message}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;

//currently all of this is hard coded
