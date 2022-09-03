import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get("https://api.github.com/search/users?q=location:madagascar")
            .then((response) => response.data.items)
            .then((data) => setUsers(data));
    }, [])

    
    return(
        <>
            
                <div className="row">
                { users.map((val =>(
                    <div className="user-container" key={val.id}>
                    <div class="user-image">
                        <div class="user-image-content">
                            <img className='user-avatar' src="https://avatars.githubusercontent.com/u/50581342?v=4" alt="user-avatar" />
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="user-info-name"><span>{val.login}</span></div>
                        <div class="user-info-login">@NickSteven</div>
                    </div>
                    </div>
                )))
                
                }
                </div>
            
            
        
        
        </>

        
    )
}

export default UserList