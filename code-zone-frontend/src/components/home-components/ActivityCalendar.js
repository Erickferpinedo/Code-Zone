import React, { useState } from "react";
import "./ActivityCalendar.css"; // Import the styles

const ActivityCalendar = () => {
  const daysInMonth = 31; // Assume 31 days for simplicity
  const [activeDays, setActiveDays] = useState(Array(daysInMonth).fill(false));

  // Toggle activity for a specific day
  const toggleDay = (index) => {
    const updatedDays = [...activeDays];
    updatedDays[index] = !updatedDays[index];
    setActiveDays(updatedDays);
  };

  return (
    <div className="calendar">
      {Array.from({ length: daysInMonth }).map((_, index) => (
        <div
          key={index}
          className={`day ${activeDays[index] ? "active" : ""}`}
          onClick={() => toggleDay(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ActivityCalendar;
