import React from "react";
import "./about.css";
import HomeNavBar from "../components/Home Page/HomeNavBar";
import AboutUs from "../components/About-components/AboutUs";
import HomePageFooter from '../components/Home Page/HomePageFooter';


function About(){
    return(
        <div className="AboutPage">
            <HomeNavBar />
            <div className="AboutComponent">
                <AboutUs />
            </div>
            <HomePageFooter />
        </div>
    )
}

export default About;