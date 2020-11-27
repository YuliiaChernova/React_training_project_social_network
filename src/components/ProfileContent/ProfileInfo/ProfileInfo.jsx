import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/AlsterPanorama.jpg/900px-AlsterPanorama.jpg" />
            </div>

            <div className={classes.description}>
                Description
            </div>
        </div>
    )
}

export default ProfileInfo;