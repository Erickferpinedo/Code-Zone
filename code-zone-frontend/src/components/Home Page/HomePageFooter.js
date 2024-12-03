import React from 'react';
import './homePageFooter.css';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="quote">
                <h1>"Without Data Structures, Your Code is Like a Library Without Books."</h1>
                <h2>-Anonymous</h2>
            </div>
            
            <p>Made with <span role="img" aria-label="heart">❤️</span> at FIU.</p>
            <p>&copy; 2024 Code Zone.</p>
        </footer>
    );
};

export default Footer;