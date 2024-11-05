import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Memes from './components/Memes';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Memes/>
    </div>
  );
}

export default App;
