import React from 'react';
import classes from './User.module.css';


function User (props) {
    return (
        <div className={classes.userContainer}>
            <div className={classes.avatarContainer}>
                <div className={classes.imgContainer}>
                    <img src={props.avatar}></img>
                </div>
                <div className={classes.buttonContainer}>
                   {props.followed ? <button>Unfollow</button> : <button>Follow</button>}
                </div>
            </div> 
            <div className={classes.infoContainer}>
                <div className={classes.nameStatusContainer}>
                    <div className={classes.name}> {props.name} </div>
                    <div className={classes.status}> {props.status} </div>
                </div>
                <div className={classes.placeContainer}>
                    {props.place.country} <br></br> {props.place.city}
                </div>
            </div>
        </div>
    )

}

export default User;