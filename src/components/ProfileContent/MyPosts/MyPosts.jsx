import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let postsElements = props.postsData.map((post) => <Post message={post.text} likesCount={post.likesCount} />);

    return (
        <div className={classes.postsBlock}> <h3>My posts</h3>
            <div> New Post
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
               {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;