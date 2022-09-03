import React from 'react';

const UserList = () => {
    
    return(
        <div className='user-main-container'>
            <div className="user-container">
                <div class="user-image">
                    <div class="user-image-content">
                        <img className='user-avatar' src="https://avatars.githubusercontent.com/u/50581342?v=4" alt="user-avatar" />
                    </div>
                </div>
                <div class="user-info">
                    <div class="user-info-name"><span>ra-nick</span></div>
                    <div class="user-info-login">@NickSteven</div>
                </div>
            </div>
        </div>
    )
}

export default UserList