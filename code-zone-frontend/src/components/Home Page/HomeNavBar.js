import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CSSTransition } from "react-transition-group";
import "./homeNavBar.css";
import MenuIcon from "@mui/icons-material/Menu"

export default function HomeNavBar() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();  // Initialize navigate function

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    setIsSmallScreen(mediaQuery.matches);
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img 
        src="/Images/homenavbarimg.png" 
        className="Logo" 
        alt="logo" 
        onClick={() => navigate('/')} // Navigate when the image is clicked
        style={{cursor: 'pointer'}} // Optional: add a cursor pointer to indicate it's clickable
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          
          <button onClick={() => navigate ('/about')}>About</button>
          <button onClick={() => navigate('/signin')}>Sign In</button> {/* Navigate to sign-in page */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="MenuIcon">
        <MenuIcon />
      </button>
    </header>
  );
}