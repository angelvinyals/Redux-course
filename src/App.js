import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//this is a static version
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-App">
          <form action="">
            <input type="text"/>
          </form>
          <ul>
            <li>
              <input type="checkbox"/>
              Learn
            </li>
            <li>
              <input type="checkbox"/>
              Build an Awesome App
            </li>
            <li>
              <input type="checkbox"/>
              Ship it!
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

