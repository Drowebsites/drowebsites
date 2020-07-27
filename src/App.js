import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Services />
      </main>
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Landing page...
        </p>
        <Home />
      </header>
      <Footer />
    </div>
  );
}

export default App;
