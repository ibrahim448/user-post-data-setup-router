import React from 'react';
import "./Friend.css";
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, email, username} = friend;
    return (
        <div className='friend'>
            <h1>Name: {name}</h1>
            <h4>Email: {email}</h4>
            <p>User Name: {username}</p>
            <button><Link to={`/friend/${friend.id}`}>Details</Link></button>
        </div>
    );
};

export default Friend;