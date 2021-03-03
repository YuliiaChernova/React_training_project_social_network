import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function ProfileContent(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>

        </div>
    )
}

//<img src="https://s.mediasole.ru/cache/preview/data/images/1877/1877403/1587652560_usataja-sinica-1.jpg" />

export default ProfileContent;