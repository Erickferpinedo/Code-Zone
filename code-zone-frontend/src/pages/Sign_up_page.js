/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./sign_up_page.css";
import Sign_in_select from "../components/sign-in-components/Sign_in_select";

function Sign_up_page() {
  const navigate = useNavigate();

  return (
    <div className="Sign_up_page">
      <Sign_in_select />

      <div className="navigation-buttons">
        <button onClick={() => navigate("/")} className="nav-button">
          Back to Sign In
        </button>
        <button onClick={() => navigate("/log-prob")} className="nav-button">
          Go to Log Problem
        </button>
      </div>
    </div>
  );
}

export default Sign_up_page;
