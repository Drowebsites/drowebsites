import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Services />
      </main>
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
