import React from "react";
import Xarrow from "react-xarrows";  // Import Xarrow
import './homePageBody.css';

const HomePageBody = () => {
    return (
        <div className="HomePageBodyContent">
            {/* Leverage Spatial Recall */}
            <div className="LSR" id="LSR">
                <div className="text-contentLSR" id="textLSR">
                    <h2>Leverage Spatial Recall</h2>
                    <p>Utilize proven educational strategies based on cognitive science and boost long-term retention to deepen your understanding of Data Structures and Algorithms.</p>
                </div>
                <img src={require("code-zone-frontend/public/Images/BrainDesign.png")} className="BrainDesign" alt="Home Page Icon" />
            </div>

            {/* Personalized Learning Support */}
            <div className="PLS" id="PLS">
                <img src={require("code-zone-frontend/public/Images/PLSImage.png")} className="Books" alt="Home Page Icon" />
                <div className="text-contentPLS" id="textPLS">
                    <h2>Personalized Learning Support</h2>
                    <p>Collect data on individual problem areas to revisit these concepts at optimal intervals for better mastery.</p>
                </div>
            </div>

            {/* Overcome Complex Challenges */}
            <div className="OCC" id="OCC">
                <div className="text-contentOCC" id="textOCC">
                    <h2>Overcome Complex Challenges</h2>
                    <p>Create an optimal learning environment to tackle tough topics, fostering consistent practice with targeted feedback.</p>
                </div>
                <img src={require("code-zone-frontend/public/Images/OCCImage.png")} className="Puzzle" alt="Home Page Icon" />
            </div>

            <div className="quote">
                <h1>"Without Data Structures, Your Code is Like a Library Without Books."</h1>
                <h2>-Anonymous</h2>
            </div>

            {/* Xarrow with anchor to top */}
            <Xarrow start="textLSR" end="textPLS" startAnchor="bottom" endAnchor="top" color="#477DAC" strokeWidth={5} />
            <Xarrow start="textPLS" end="textOCC" startAnchor="bottom" endAnchor="top" color="#477DAC" strokeWidth={5} />
        
        </div>
    );
};

export default HomePageBody;