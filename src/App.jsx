import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Books from './Books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Redux!</p>
        <Counter />
        <Books />
      </header>
    </div>
  );
}

export default App;
