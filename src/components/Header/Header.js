import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;