import React from 'react';
import { useLoaderData } from 'react-router-dom';


const FriendDetails = () => {
    const friend = useLoaderData();
    const {name,username,email,phone,website} = friend;
    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>User Name: {username}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetails;