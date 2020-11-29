import React from 'react';
import Friend from './Friend/Friend';
import classes from './Friends.module.css';

function Friends(props) {

    let friendsData = props.state.friendsData;

    let friendElements = friendsData.map((friend) => <Friend name={friend.name} photoUrl={friend.photoUrl}/> );

    return (
        <div className={classes.header}> Friends
            <div className={classes.itemsArea}>
                {friendElements}
            </div>
        </div>
    )
}

export default Friends;