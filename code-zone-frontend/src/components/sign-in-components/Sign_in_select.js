import "./sign_in_select.css";
import { FaGoogle, FaGithub, FaEnvelope } from "react-icons/fa";
import React from "react";

const Sign_in_select = () => {
  const googleLogin = () => {
    window.location.href = "http://localhost:5001/auth/google";
  };

  const githubLogin = () => {
    window.location.href = "http://localhost:5001/auth/github";
  };

  return (
    <div className="sign_in_option">
      <button className="sign_in_button" onClick={googleLogin}>
        <FaGoogle className="icon" />
        Sign up with Google
      </button>
      <button className="sign_in_button" onClick={githubLogin}>
        <FaGithub className="icon" />
        Sign up with GitHub
      </button>
      <button className="sign_in_button">
        <FaEnvelope className="icon" />
        Sign up with email
      </button>
      <div className="sign_in_footer">
        Already have an account? <a href="/">Sign in</a>
      </div>
    </div>
  );
};

export default Sign_in_select;
