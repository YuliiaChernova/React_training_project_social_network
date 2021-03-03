import React from 'react';
import User from './User/User';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/userimg.jpg'

let Users = (props) => {

    if (props.usersPage.usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
    }

    let usersElements = props.usersPage.usersData.map((user) => <div className={classes.userContainer} key={user.id}>
        <div className={classes.avatarContainer}>
            <div className={classes.imgContainer}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}></img>
            </div>
            <div className={classes.buttonContainer}>
                {user.followed
                    ?  <button onClick={() => { props.unfollowUser(user.id) }}>Unfollow</button>
                    : <button onClick={() => { props.followUser(user.id) }}>Follow</button>}
            </div>
        </div>
        <div className={classes.infoContainer}>
            <div className={classes.nameStatusContainer}>
                <div className={classes.name}> {user.name} </div>
                <div className={classes.status}> {user.status} </div>
            </div>
            <div className={classes.placeContainer}>
                {'user.place.country'} <br></br> {'user.place.city'}
            </div>
        </div>
    </div>
    )
    return (
        <div className={classes.usersBlock}>
            {usersElements}
        </div>
    )
}

export default Users;