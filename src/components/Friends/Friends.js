import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import "./Friends.css";

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>Defoult Header</h1>
            <h3>Friends List: {friends.length}</h3>
            <div className='friends'>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;