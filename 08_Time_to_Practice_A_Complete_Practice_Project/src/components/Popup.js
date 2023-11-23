import React, { useState } from '../../../08 Working with Refs & Portals/node_modules/@types/react';
import './Popup.css';

function Popup(props) {
  const onClickHandler = (e) => {
    props.onClose();
  };
  return (
    <div className="popup">
      <div className="container">
        <p>{props.error}</p>
        <button onClick={onClickHandler}>Okay</button>
      </div>
    </div>
  );
}
export default Popup;
