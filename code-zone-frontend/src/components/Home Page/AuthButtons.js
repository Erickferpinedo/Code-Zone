// components/AuthButtons.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './authButtons.css';

function AuthButtons() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin'); // Assuming '/signin' is the route for sign-in page
  };

  const handleSignUp = () => {
    navigate('code-zone-frontend/src/pages/Sign_up_page.js'); // Assuming '/signup' is the route for sign-up page
  };

  return (
    <div className="AuthButtons">
      <button className="signInButton" onClick={handleSignIn}>Sign In</button>
      <button className="signUpButton" onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default AuthButtons;