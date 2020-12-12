import React from 'react';
import { addPostActionCreator, changePostInputActionCreator } from '../../../redux/profilePageReducer';

import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let postsElements = props.postsData.map((post) => <Post message={post.text} likesCount={post.likesCount} />);
    
    let newPostElement = React.createRef();
    
    let onAddPostClick = () => {
        let postMessage = newPostElement.current.value;
        props.dispatch(addPostActionCreator(postMessage));
    };

    let onChangePostInput = (e) => {
        let letter = e.target.value;
        props.dispatch(changePostInputActionCreator(letter));
        
    };

    return (
        <div className={classes.postsBlock}> <h3>My posts</h3>
            <div> New Post
                <div>
                    <textarea ref={newPostElement} value={props.inputValue} onChange={onChangePostInput}></textarea>
                </div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
               {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;