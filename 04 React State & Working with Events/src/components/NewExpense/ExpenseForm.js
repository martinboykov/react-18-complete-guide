import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
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
  const switchFormStateHandler = () => {
    props.onCancel();
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
      <div className='buttons-wrapper'>
        <div className='new-expense__action'>
          <button type='button' onClick={switchFormStateHandler}>
            Cancel
          </button>
        </div>
        <div className='new-expense__action'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
