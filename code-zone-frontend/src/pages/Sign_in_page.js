import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sign_in_page.css';
import Sign_in_form from '../components/Sign_in_form'; 

function Sign_in_page() {
    const navigate = useNavigate();

    return (
        <div className="Sign_in_page">
            <Sign_in_form/>
        </div>
    );
}

export default Sign_in_page;
