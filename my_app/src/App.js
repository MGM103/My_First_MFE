import React from "react";
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Remote App </h1>
        <Counter />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
