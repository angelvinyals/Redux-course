import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'

class App extends Component {
  constructor(){
    super()
    this.state ={
      todos: [
        {id:1, name:'Learn', isComplete:false},
        {id:2, name:'Build an Awesome app', isComplete:false},
        {id:3, name:'Ship', isComplete:true}
      ],      
    }    
  }

  handleInputChange= (e) =>{
    this.setState({currentTodo: e.target.value})    
  }

  render() {    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </div>
        <div className="Todo-App">
          <TodoForm 
            handleInputChange={this.handleInputChange} 
            currentTodo={this.state.currentTodo}
          />          
          <TodoList 
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  // You can declare that a prop is a specific JS primitive. 
  //By default, these are all optional.
  todos: PropTypes.array,
  handleInputChange: PropTypes.func,
  currentTodo: PropTypes.string,
}  
