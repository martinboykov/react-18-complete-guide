import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [isFormActive, setIsFormActive] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpenseData(expenseData);
    setIsFormActive(false);
  };
  const hideFormHandler = () => {
    setIsFormActive(false);
  };
  const showFormHandler = () => {
    setIsFormActive(true);
  };
  if (isFormActive) {
    return (
      <div className='new-expense'>
        <ExpenseForm
          isFormActive={isFormActive}
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      </div>
    );
  } else {
    return (
      <div className='new-expense'>
        <button onClick={showFormHandler}>Add New Expense</button>
      </div>
    );
  }
}
export default NewExpense;
