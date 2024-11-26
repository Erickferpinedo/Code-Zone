// Sidebar.js
//HERE IS WHERE YOU ADD THE REDIRECT FOR THE SIDE BAR!!!! 
//YOU CAN JUST COPY THE REDIRECT CODE AND CHANGE IT TO YOUR PAGE IN APP.JS!!

import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  const handleLogout = () => {
    toggleSidebar();
    navigate("/");
   // navigate("/");
  };
  const handleSettings = () => {
    toggleSidebar();
    navigate("/settings");
  }

  const handleViewLogs = () => {
    toggleSidebar();
    navigate("/view-logs");
  };
  const handleLogProb = () => {
    toggleSidebar();
    navigate("log-prob");
  };

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Code Base</h2>
      <ul>
        <li>
          <HomeIcon /> <span>Home</span>
        </li>
        <li onClick={handleLogProb}>
          <AddIcon /> <span>Log Problem</span>
        </li>
        <li onClick={handleViewLogs}>
          <ListIcon /> <span>View Logs</span>
        </li>
        <li>
          <NotificationsIcon /> <span>Notifications</span>
        </li>
        <li>
          <InfoIcon /> <span>About Us</span>
        </li>
      </ul>
      <ul className="sidebar-footer">
        <li onClick ={handleSettings}>
          <SettingsIcon /> <span>Settings</span>
        </li>
        <li onClick={handleLogout}>
          <ExitToAppIcon /> <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;