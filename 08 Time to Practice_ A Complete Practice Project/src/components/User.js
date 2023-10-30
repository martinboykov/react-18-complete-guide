import React, { useState } from 'react';
import './User.css';

function User(props) {

  return (
    <div className='user'>
      {props.name} ({props.age} years old)
    </div>
  );
}
export default User;
