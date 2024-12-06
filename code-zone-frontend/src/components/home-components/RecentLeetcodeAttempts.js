import React from "react";
import { Link } from "react-router-dom";
import { RctLtAtmpsMini } from "./RctLtAtmpsMini"; // Adjust this path as necessary
import "./RecentLeetcodeAttempts.css";

const RecentLeetcodeAttempts = ({ leetcodeData }) => {
  return (
    <div className="recentLeetcodeAttemptsSection">
      <div className="recentLeetcodeAttemptsSectionBox">
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
      <div className="recentLeetcodeAttemptsSectionBox buttonBox">
        <br />
        <Link to="/log-prob" className="addNewLogButton">
          Add New Log
        </Link>
        <Link to="/view-logs" className="seeAllLogsButton">
          See All Logs
        </Link>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default RecentLeetcodeAttempts;
