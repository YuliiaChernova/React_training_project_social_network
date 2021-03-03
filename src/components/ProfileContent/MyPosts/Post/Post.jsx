import React from 'react';
import { likeClickActionCreator } from '../../../../redux/profilePageReducer';
import classes from './Post.module.css';

function Post(props) {
    
    let onLikeClick = (e) => {
        let div = e.target.parentElement;
        //props.dispatch(likeClickActionCreator());
    }

    return(
        <div className={classes.item}> <span className={classes.hiddenId}>{props.id}</span>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
            {props.text}
            <span> {props.likesCount} likes</span> <button onClick={onLikeClick}>Like</button>
        </div>
    )
}

export default Post;