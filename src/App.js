import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Conor's Weather App </h1>
        </header>
        <div>
            <p><span id="city"></span> <span id="country"></span></p>
            <p><span id="temp"></span><span id="tempunit" ></span></p>
            
          </div>
        
      </div>
    );
  }
}

export default App;
