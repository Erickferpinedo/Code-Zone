import React from 'react';
import AuthButtons from 'code-zone-frontend/src/components/Home Page/AuthButtons.js';
import "./homeHeader.css";

const HeaderComponent = () => {
  return (
    <div className='HomeHeaderContent'>
      <div className='HomeHeaderText'>
        <h1 className='Title'>Learn, Build, and Empower:</h1>
        <h2 className='SubTitle'>Your DSA Journey Starts Here!</h2>
        <AuthButtons />
        <div className='HeaderImages'>
          <img className="headerImage" src={require("code-zone-frontend/public/Images/StatsImage.png")} alt="DSA Image" />
          <img className="headerImage2" src={require("code-zone-frontend/public/Images/RecentAttempts.png")} alt="Recent Attempts Image" />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;