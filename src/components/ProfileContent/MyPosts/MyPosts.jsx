import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postsData = props.profilePage.postsData;
    let postsElements = postsData.map((post) => <Post
        text={post.text}
        likesCount={post.likesCount}
        id={post.id} />);

    let newPostElement = React.createRef();

    let onAddPostClick = () => {
        let postMessage = newPostElement.current.value;
        props.addPost(postMessage);
    };

    let onChangePostInput = (e) => {
        let letter = e.target.value;
        props.changePostInput(letter);

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