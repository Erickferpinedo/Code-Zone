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
    window.location.href = "http://localhost:5001/auth/logout";
  };

  const handleSettings = () => {
    toggleSidebar();
    navigate("/settings");
  };

  const handleViewLogs = () => {
    toggleSidebar();
    navigate("/view-logs");
  };

  const handleLogProb = () => {
    toggleSidebar();
    navigate("/log-prob");
  };

  const handleHome = () => {
    toggleSidebar();
    navigate("/home");
  };

  const handleNotifications = () => {
    toggleSidebar();
    navigate("/notifications");
  };

  const handleAboutUs = () => {
    toggleSidebar();
    navigate("/about-us");
  };

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
      <div id="sideHead">
        <h2>Code Zone</h2>
      </div>
      <ul>
        <li onClick={handleHome}>
          <HomeIcon /> <span>Home</span>
        </li>
        <li onClick={handleLogProb}>
          <AddIcon /> <span>Log Problem</span>
        </li>
        <li onClick={handleViewLogs}>
          <ListIcon /> <span>View Logs</span>
        </li>
        <li onClick={handleNotifications}>
          <NotificationsIcon /> <span>Notifications</span>
        </li>
        <li onClick={handleAboutUs}>
          <InfoIcon /> <span>About Us</span>
        </li>
      </ul>
      <ul className="sidebar-footer">
        <li onClick={handleSettings}>
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
