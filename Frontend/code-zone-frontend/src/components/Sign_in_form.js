import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign_in_form.css';

const SignInForm = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleEmailOrUsernameChange = (e) => {
        setEmailOrUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Email/Username:', emailOrUsername);
        console.log('Password:', password);
        navigate('/log-prob'); 
    };

    const handleSignUpClick = () => {
        navigate('/sign-up'); 
    };

    return (
        <div className='sign_in_form'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='emailOrUsername'>Email or Username</label>
                    <input
                        type='text'
                        id='emailOrUsername'
                        value={emailOrUsername}
                        onChange={handleEmailOrUsernameChange}
                        placeholder='Enter your email or username'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Enter your password'
                    />
                    <div className='forgot-password'>
                        <a href='/forgot-password'>Forgot password?</a>
                    </div>
                </div>
                <button type='submit' className='sign_in_button'>Sign In</button>
            </form>
            <button onClick={handleSignUpClick} className='sign_up_button'>Sign Up</button>
        </div>
    );
};

export default SignInForm;
