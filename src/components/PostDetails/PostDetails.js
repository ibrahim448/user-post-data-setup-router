import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import "./PostDetails.css";

const PostDetails = () => {
    const post = useLoaderData();
    const {title,body,userId} = post;
    const navigate = useNavigate();

    const handler = ()=>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div className='post-details'>
            <h1><span>Title:</span> {title}</h1>
            <p><span>Details:</span> {body}</p>
            <button onClick={handler}>Get Author</button>
        </div>
    );
};

export default PostDetails;