import React, { useState } from "react";

const UserList = (props) => {
    
  return (
    <>
        {/* {users.map((val)=> (<h1 key={val.id}>{val.name}</h1>))} */}
        {props.users.filter(user=>user.login.includes(props.query)).map((val) => (
          <div className="user-container" key={val.id}>
            <div className="user-image">
              <div className="user-image-content">
                <img
                  className="user-avatar"
                  src={val.avatar_url}
                  alt="user-avatar"
                />
              </div>
            </div>
            <div className="user-info">
              <div className="user-info-name">
                <span>{val.name}</span>
              </div>
              <div className="user-info-login">@{val.login}</div>
            </div>
          </div>
         ))}
    
    </>
  );
};

export default UserList;
