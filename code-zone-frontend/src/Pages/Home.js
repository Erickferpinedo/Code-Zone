import React, { useState, useEffect } from "react";
import RecentLeetcodeAttempts from "../components/home-components/RecentLeetcodeAttempts";
import ActivityCalendar from "../components/home-components/ActivityCalendar";
import UpcomingReminders from "../components/home-components/UpcomingReminders";
import "./Home.css";
import { getAllLoggedLeetCodes } from "../components/home-components/RctLtAttmptsMOCKdata";

function Home() {
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllLoggedLeetCodes();
        setLeetcodeData(data);
      } catch (error) {
        console.error("Error fetching leetcode data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home">
      <div className="recentAttemptsContainer">
        <h1 className="sectionHeadersHome">Recent Attempts</h1>
        <RecentLeetcodeAttempts leetcodeData={leetcodeData} />
      </div>

      <div className="layoutForBottomHalfOfHome">
        <div className="activityCalendarSection">
          <h1 className="sectionHeadersHome">Activity Calendar</h1>
          <ActivityCalendar />
        </div>

        <div className="upcomingRemindersSection">
          <UpcomingReminders />
        </div>
      </div>
    </div>
  );
}

export { Home };
