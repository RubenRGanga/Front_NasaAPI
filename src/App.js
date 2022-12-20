import React from 'react';
import './App.css';
import GetApod from './components/getApod';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GetApod />
    </div>

  );
}

export default App;
