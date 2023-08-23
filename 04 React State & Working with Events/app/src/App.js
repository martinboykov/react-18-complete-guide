import React, { useState } from 'react';
import './App.css';
// import React, { Component } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  let expensesDB = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2022, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(expensesDB);
  const addExpenseDataHandler = (expensesData) => {
    console.log(expensesData);
    setExpenses((prevExpenses)=>[...prevExpenses, expensesData])
    console.log(
      '🚀 ~ file: App.js:36 ~ addExpenseDataHandler ~ expenses:',
      expenses
    );
  };
  return (
    <div className='App'>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
