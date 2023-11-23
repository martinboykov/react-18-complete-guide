import React, { useState } from '../../../08 Working with Refs & Portals/node_modules/@types/react';
import './User.css';

function User(props) {

  return (
    <div className='user'>
      {props.name} ({props.age} years old)
    </div>
  );
}
export default User;
