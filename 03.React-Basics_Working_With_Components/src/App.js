import './App.css';
// import React, { Component } from 'react';
import Expenses from './components/Expenses/Expenses';

// const App = () => {
function App() {
  return (
    <div className='App'>
      <h1>My first react app</h1>
      <Expenses></Expenses>;
    </div>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <h1>My first react app</h1>
//         <Expenses></Expenses>
//       </div>
//     );
//   }
// }

export default App;
