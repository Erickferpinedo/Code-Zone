// Main_page.js
import React from 'react';
import HomeNavBar from '../components/Home Page/HomeNavBar';
import HeaderComponent from '../components/Home Page/HomeHeader';
import AuthButtons from 'code-zone-frontend/src/components/Home Page/AuthButtons.js';  // Importing AuthButtons
import './main_page.css';
import HomePageBody from '../components/Home Page/HomePageBody';
import HomePageFooter from '../components/Home Page/HomePageFooter';

function Main_page() {
  return (
    <div className='HomePage'>
        <meta name='viewport' content='width=device-width, inital-scale=1.0'></meta>
      <HomeNavBar />
      <div className='HomePageContent'>
        <div className="HomeHeader">
        <div className="TextContainer">
          <HeaderComponent />
        </div>
        </div>

        <div className="HomePageBody">
            <HomePageBody />
        </div>

        <HomePageFooter />
        
      </div>
      
    </div>
  );
}

export default Main_page;