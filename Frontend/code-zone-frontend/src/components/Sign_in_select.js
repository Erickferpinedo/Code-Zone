import './sign_in_select.css';
import { FaGoogle, FaGithub, FaEnvelope } from 'react-icons/fa';

const Sign_in_select = () => {
    return (
        <div className='sign_in_option'>
            <button className='sign_in_button'>
                <FaGoogle className='icon' />
                Sign up with Google
            </button>
            <button className='sign_in_button'>
                <FaGithub className='icon' />
                Sign up with GitHub
            </button>
            <button className='sign_in_button'>
                <FaEnvelope className='icon' />
                Sign up with email
            </button>
            <div className='sign_in_footer'>
                Already have an account? <a href='/'>Sign in</a>
            </div>
        </div>
    );
};

export default Sign_in_select;
