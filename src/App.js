import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
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
