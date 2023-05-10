import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./PostDetails.css";

const PostDetails = () => {
    const post = useLoaderData();
    return (
        <div className='post-details'>
            <h1><span>Title:</span> {post.title}</h1>
            <p><span>Details:</span> {post.body}</p>
        </div>
    );
};

export default PostDetails;