import React from 'react';
import classes from './Post.module.css';

function Post(props) {
    return(
        <div className={classes.item}> {props.message} 
            <span> {props.likesCount} likes</span>
        </div>
    )
}

export default Post;