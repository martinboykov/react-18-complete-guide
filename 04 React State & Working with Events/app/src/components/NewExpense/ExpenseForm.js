import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  // const [userInput, setUserInput] = useState({});
  // const titleChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     console.log(prevState);
  //     return { ...prevState, enteredTitle: e.target.value };
  //   });
  // };
  // const amountChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     console.log(prevState);
  //     return { ...prevState, enteredAmount: e.target.value };
  //   });
  // };
  // const dateChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     console.log(prevState);
  //     return { ...prevState, enteredDate: e.target.value };
  //   });
  // };
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setAmountTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmountTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDate);
    setEnteredTitle('');
    setAmountTitle('');
    setEnteredDate('');
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2023-01-01'
            mac='2023-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__action'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
