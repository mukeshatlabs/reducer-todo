import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1> To Do App </h1>
      <ToDoList />
    </div>
  );
}

export default App;
