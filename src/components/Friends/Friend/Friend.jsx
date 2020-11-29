import React from 'react';
import classes from './Friend.module.css';

function Friend(props) {
    return (
        <div className={classes.item}>
            <div className={classes.itemPhoto}>
                <img src={props.photoUrl} />
            </div>
            <div className={classes.itemName}> {props.name} </div>
        </div>
    )
}

export default Friend;