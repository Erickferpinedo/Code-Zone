import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel'; 
import './notification.css'; 

const Notification = ({ title, message }) => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleClear = () => {
    setIsVisible(false); // 
  };

  if (!isVisible) {
    return null; // 
  }

  return (
    <div className="notification">
      <h4 className="notification-title">{title}</h4>
      <div className="notification-body">
        <p className="notification-message">{message}</p>
        <button className="clear-button" onClick={handleClear}>
          <CancelIcon /> {/* Material UI Cancel Icon */}
        </button>
      </div>
    </div>
  );
};

// Define expected prop types
Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
