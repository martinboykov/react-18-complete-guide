import React, { useState } from 'react';
import Users from './components/Users';
import Form from './components/Form';
import './App.css';

function App() {
  let usersDB = [];
  const [users, setUsers] = useState(usersDB);
  const addUserDataHandler = (usersData) => {
    usersData.id = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
    console.log(usersData);
    setUsers((prevUsers) => [...prevUsers, usersData]);
  };
  return (
    <>
      <Form onAddUserData={addUserDataHandler}></Form>
      {users.length > 0 && <Users users={users}></Users>}
    </>
  );
}

export default App;
