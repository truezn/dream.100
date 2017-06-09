import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to my fist react app by Ning </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <span id="idNavToolBar"> navigation
        </span>
        <span id="idContentArea"> content area
        </span>
        </div>
      </div>
    );
  }
}

export default App;