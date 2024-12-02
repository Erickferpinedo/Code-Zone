import React, { useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "./header.css";

const Header = ({ toggleSidebar, userIconUrl }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const popoverRef = useRef(null); // Reference for positioning the popover

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget); // Set the bell icon as the anchor for the popover
  };

  const handleClosePopover = () => {
    setAnchorEl(null); // Close the popover when clicking outside
  };

  // Data for retry reminder and notifications
  const retryReminder = {
    title: "Array",
    description: "Don’t forget to retry your unfinished task.",
    lastTested: "2024-11-10",
  };

  const notifications = [
    { title: "New Message", message: "You have a new message from John." },
    { title: "Update", message: "Your profile was updated successfully." },
  ];

  return (
    <div className="header">
      <IconButton aria-label="menu" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <div className="header-right">
        <IconButton
          aria-label="notifications"
          onClick={handleOpenPopover}
          ref={popoverRef} // Set ref to help position the popover
        >
          <NotificationsIcon />
        </IconButton>
        <IconButton aria-label="user">
          {userIconUrl ? (
            <img className="userIcon" src={userIconUrl} alt="User Icon" />
          ) : (
            <AccountCircleIcon />
          )}
        </IconButton>
      </div>

      {/* Popover for notifications */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl} // Position the popover relative to the bell icon
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom", // Open the popover below the bell icon
          horizontal: "center", // Center it horizontally under the bell icon
        }}
        transformOrigin={{
          vertical: "top", // Align the top of the popover with the bottom of the bell icon
          horizontal: "center",
        }}
      >
        <div className="popover-content">
          {/* Retry Reminder */}
          <h2 className="RetryTitle"> Retry Reminder </h2>
          <Typography variant="h6">{retryReminder.title}</Typography>
          {/* <Typography variant="h2">{Retry Reminder}</Typography> */}
          <Typography variant="body2">Last Tested: {retryReminder.lastTested}</Typography>

          {/* Notifications */}
          <h2 className="Notifications Title">Recent Notifications</h2>
          {notifications.map((notif, index) => (
            <div key={index} className="notification">
              <strong className="notificationSubTitle">{notif.title}</strong>
              <p>{notif.message}</p>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default Header;
