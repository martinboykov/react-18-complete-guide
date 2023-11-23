import React, { useState } from '../../../08 Working with Refs & Portals/node_modules/@types/react';
import Popup from './Popup';

import './Form.css';

function Form(props) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [dataError, setDataError] = useState('');

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    if(userData.name.length ===0 || userData.age.length ===0){
      setDataError('Please enter a valid name and age (non-empty values)');
      return;
    }
    if(userData.age < 0){
      setDataError('Please enter a positive number for age');
      return;
    }
    props.onAddUserData(userData);
    setEnteredName('');
    setEnteredAge('');
  };

  const hidePopupHandler = () => {
    setDataError('');
  };
  return (
    <>
      <form action="" className="container" onSubmit={submitHandler}>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="">Username</label>
            <input type="text" value={enteredName} onChange={nameChangeHandler} />
          </div>
          <div className="input-group">
            <label htmlFor="">Age (Years)</label>
            <input type="number" value={enteredAge} onChange={emailChangeHandler} />
          </div>
          <button type="submit">Add User</button>
        </div>
      </form>
      {dataError.length > 0 && <Popup error={dataError} onClose={hidePopupHandler}></Popup>}
    </>
  );
}
export default Form;
