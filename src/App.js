import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Landing page...
        </p>
        <Home />
      </header>
    </div>
  );
}

export default App;
