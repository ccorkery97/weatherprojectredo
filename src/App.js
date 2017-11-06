import React, { Component } from 'react';
import getLocation from './components/getLocation';
import getTemp from './components/getTemp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Conor's Weather App </h1>
        </header>
      </div>
    );
  }
}

export default App;
