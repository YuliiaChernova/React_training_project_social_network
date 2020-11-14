import React from 'react';

function ProfileContent() {
    return (
        <div className="content">

            <div className="content-header-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/AlsterPanorama.jpg/900px-AlsterPanorama.jpg" />
            </div>

            <div className="avatar-status-wrapper">
                <div className="avatar-img">
                    <img src="https://s.mediasole.ru/cache/preview/data/images/1877/1877403/1587652560_usataja-sinica-1.jpg" />
                </div>
                <div className="status"></div>

            </div>

            <div className="posts-wrapper">

                <div className="new-post">

                </div>

                <div className="added-posts">

                </div>

            </div>

        </div>
    )
}

export default ProfileContent;