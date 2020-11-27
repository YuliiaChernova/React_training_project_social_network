import React from 'react';
import classes from './Post.module.css';

function Post(props) {
    return(
        <div className={classes.item}> 
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
            {props.message}
            <span> {props.likesCount} likes</span>
        </div>
    )
}

export default Post;