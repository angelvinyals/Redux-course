import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//this is a static versionc
class App extends Component {
  constructor(){
    super()
    this.state ={
      todos: [
        {id:1, name:'Learn', isComplete:false},
        {id:2, name:'Build an Awesome app', isComplete:false},
        {id:3, name:'Ship', isComplete:true}

      ]
    }
  }
  render() {
    const {todos}= this.state
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
            {todos.map(todo => 
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
              </li>
            )}  
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

