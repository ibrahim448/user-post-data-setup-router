import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <NavLink className={({isActive})=> isActive ? "active" : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;