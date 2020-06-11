import React from 'react';
import { OctoLogo } from './images';


import UnityApp from "./UnityApp";


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={OctoLogo} alt="OctoLogo" className="OctoLogo" />
      </header>


      <UnityApp />


    </div>
  );
}

export default App;
