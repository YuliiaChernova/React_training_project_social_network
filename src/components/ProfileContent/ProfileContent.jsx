import React from 'react';
import classes from './ProfileContent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function ProfileContent() {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

//<img src="https://s.mediasole.ru/cache/preview/data/images/1877/1877403/1587652560_usataja-sinica-1.jpg" />

export default ProfileContent;