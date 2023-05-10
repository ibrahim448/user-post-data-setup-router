import React from 'react';
import "./Post.css";
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title,body} = post;
    return (
        <div className='post'>
            <h4>{title}</h4>
            <p>{body}</p>
            <button><Link to={`/post/${post.id}`}>More Read</Link></button>
        </div>
    );
};

export default Post;