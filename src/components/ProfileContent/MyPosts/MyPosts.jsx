import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return(
        <div> My posts
                <div> New post </div>
                    <div className={classes.posts}>
                        <Post message='It is my first post' likesCount='15'/>
                        <Post message='Lets chatting' likesCount='20'/>
                    </div>
        </div>
    )
}

export default MyPosts;