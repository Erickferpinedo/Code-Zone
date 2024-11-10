
import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header">
      <IconButton aria-label="menu" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <div className="header-right">
        <IconButton aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
        <IconButton aria-label="user">
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
