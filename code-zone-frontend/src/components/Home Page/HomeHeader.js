import React from 'react';
import "./homeHeader.css";

const HeaderComponent = () => {
  return (
    <div className='HomeHeaderContent'>
      <div className='HomeHeaderText'>
        <h1 className='Title'>Learn, Build, and Empower:</h1>
        <h2 className='SubTitle'>Your DSA Journey Starts Here!</h2>
      </div>
      {/* <img className="headerImage" src={require("code-zone-frontend/public/StatsImage.png")} alt="DSA Image" /> */}
    </div>
  );
};

export default HeaderComponent;