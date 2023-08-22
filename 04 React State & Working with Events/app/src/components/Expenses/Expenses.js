import React from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <div className='expenses'>
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}
export default Expenses;
