import React, { useState } from '../../../08 Working with Refs & Portals/node_modules/@types/react';
import User from './User';

function Users(props) {
  return (
    <div className="users-list container">
      {props.users.map((user, index) => (
        <User key={user.id} name={user.name} age={user.age}></User>
      ))}
    </div>
  );
}
export default Users;
