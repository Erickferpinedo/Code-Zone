import React, { useState, useEffect } from "react";
import { RctLtAtmpsMini } from "../components/home-components/RctLtAtmpsMini";
import "./Home.css";

import { getAllLoggedLeetCodes } from "../components/home-components/RctLtAttmptsMOCKdata";
import { Link } from "react-router-dom";

function Home() {
  const [leetcodeData, setLeetcodeData] = useState([]); // State to hold attempts data
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllLoggedLeetCodes();
        setLeetcodeData(data);
      } catch (error) {
        console.error("Error fetching leetcode data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchData();
  }, []); // Empty dependency array to run this effect only once

  if (loading) {
    return <div>Loading...</div>; // Optional loading indicator
  }

  return (
    <div className="Home">
      <div className={"allContainers"}>
        <h1 className={"sectionHeadersHome"}>Recent Attempts</h1>
        <div className={"recentLeetcodeAttemptsSectionBox"}>
          <br />
          <div className="homelayout">
            {leetcodeData.length === 0 ? (
              <div className="noProblems">
                <h2>You currently have no saved problems.</h2>
              </div>
            ) : (
              leetcodeData.map((miniltAtp, index) => (
                <RctLtAtmpsMini key={index} atmptData={miniltAtp} />
              ))
            )}
          </div>
          <div className={"recentLeetcodeAttemptsSectionBox buttonBox"}>
            <br />
            <Link to="/log-prob" className={"addNewLogButton"}>
              Add New Log
            </Link>
            <Link to="/view-logs" className={"seeAllLogsButton"}>
              See All Logs
            </Link>
            <br />
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        <div className={"layoutForBottomHalfOfHome"}>
          <div className={"grow2Home homeStats"}>
            <div className={"layoutForStatsAndReminders"}>
              <div className={"headerForStatsAndReminders"}>
                <h1 className={"sectionHeadersHome"}>Statistics</h1>
              </div>
              <div className={"mainForStatsAndReminders"}>
                <p>main chunk</p>
                <p>stats here. create stats component</p>
              </div>
              <div className={"footerForStatsAndReminders"}>
                <p>footer</p>
              </div>
            </div>
          </div>
          <div className={"grow1Home homeReminders"}>
            <div className={"layoutForStatsAndReminders"}>
              <div className={"headerForStatsAndReminders"}>
                <h1 className={"sectionHeadersHome"}>Upcoming Reminders</h1>
              </div>
              <div className={"mainForStatsAndReminders"}>
                <p>main chunk</p>
                <p>reminders here. create reminders component</p>
                <p>reminders here. create reminders component</p>
                <p>reminders here. create reminders component</p>
                <p>reminders here. create reminders component</p>
              </div>
              <div className={"footerForStatsAndReminders"}>
                <p>footer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
