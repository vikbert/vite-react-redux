import React from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './Books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React-query!</p>
        <Books />
      </header>
    </div>
  );
}

export default App;
