import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUsPage">
      <h1 className="aboutUsTitle">About Us</h1>
      <p className="aboutUsIntro">
        Welcome to <strong>Code Zone</strong>, your companion for mastering <strong>Data Structures and Algorithms (DSA)</strong> through consistent practice and problem-solving. Our mission is to help aspiring programmers like you stay motivated and organized in tackling coding challenges.
      </p>
      <p className="aboutUsContent">
        At Code Zone, we understand the importance of steady progress when it comes to improving your <strong>LeetCode</strong> and problem-solving skills. That’s why we provide a simple yet powerful platform where you can <strong>sign up for personalized reminders to solve LeetCode problems</strong>. Never miss a chance to practice, improve, and succeed.
      </p>
      <h2 className="aboutUsSubTitle">Why Choose Code Zone?</h2>
      <ul className="aboutUsList">
        <li><strong>Accountability Made Simple:</strong> Get reminders tailored to your schedule to keep you on track.</li>
        <li><strong>Focus on DSA Excellence:</strong> Hone your skills in <em>Data Structures and Algorithms</em> for interviews, competitions, and beyond.</li>
        <li><strong>Build Confidence:</strong> Tackle coding problems regularly and see your progress over time.</li>
      </ul>
      <p className="aboutUsOutro">
        Join <strong>Code Zone</strong> today and take the first step toward becoming a coding master.
      </p>
    </div>
  );
}

export default AboutUs;
