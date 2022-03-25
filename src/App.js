import React from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Portfolio from './components/portfolio/Portfolio.jsx';


function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills/>
      <Portfolio/>
      <Footer/>


    </div>
  );
}

export default App;
