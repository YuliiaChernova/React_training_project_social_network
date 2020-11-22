import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './ProfileContent.module.css';

function ProfileContent() {
    return (
        <div>

            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/AlsterPanorama.jpg/900px-AlsterPanorama.jpg" />
            </div>

            <div>
                ava+description
            </div>

            <MyPosts />

        </div>
    )
}

//<img src="https://s.mediasole.ru/cache/preview/data/images/1877/1877403/1587652560_usataja-sinica-1.jpg" />

export default ProfileContent;