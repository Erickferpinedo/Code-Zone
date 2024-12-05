import React from "react";
import './aboutUs.css';
import avifImage from 'code-zone-frontend/public/Images/About/InitBuild.avif';
import {ReactComponent as InitFIU } from 'code-zone-frontend/public/Images/About/INIT_FIU.svg'

function AboutUs (){
    return (
        <><div className='About'>
            <div className="AboutUs">
                <h1>About Us</h1>
                <p>We are a group of passionate students working under the larger organization, Init FIU Build, as
                    part of the Web Development for Beginners group. Our team is committed to learning and growing together,
                    leveraging each other's strengths to bring real-world projects to life. Through collaboration, teaching, and mutual support,
                    we are building not only a project but a foundation of practical web development skills.
                    Our current project focuses on empowering students in their journey to master Data Structures and Algorithms (DSA),
                    combining innovative techniques with hands-on experience to create a truly engaging and supportive learning platform
                </p>
            </div>
            <div className="OurPurpose">
                <h1>Our Purpose</h1>
                <p>
                    Our purpose is to help students enhance their Data Structures and Algorithms (DSA) skills by leveraging spatial recall,
                    a proven educational strategy based on cognitive science. We aim to create an optimal learning environment where students
                    can overcome the challenges of mastering complex topics. By collecting data on problem areas, our platform provides
                    personalized support that ensures students revisit difficult concepts at carefully timed intervals, fostering a deeper
                    understanding and improving long-term retention.
                </p>
                <p>
                    We believe in not only improving technical skills but also building confidence and resilience in students.
                    By combining consistent practice with targeted feedback, our approach encourages students to tackle challenging
                    problems without feeling overwhelmed. Ultimately, we strive to create a supportive learning community where
                    mastering DSA becomes an engaging and rewarding experience, preparing students for real-world challenges in the tech industry.
                </p>
            </div>
        </div>
        <div className="Images">
            <InitFIU className = "INITFIU" />
            <img src={avifImage} className="INITBUILD" alt="Init Build" />
        </div></>
    )
}

export default AboutUs;
