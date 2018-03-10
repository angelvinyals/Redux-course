import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo,findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers'
import {partial, pipe} from './lib/utils'

class App extends Component {
  
  state ={
    todos: [
      {id:"50434fr5-9147-4c2f-8ea9-7c407aba572c", name:'Learn', isComplete:false},
      {id:"50434f35-9147-4c2f-8ea9-7c407aba573c", name:'Build an Awesome app', isComplete:false},
      {id:"50434f65-9147-432f-8ea9-7c407aba574c", name:'Ship', isComplete:true}
    ],      
  }    
  

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value,
      errorMessage:''
    })    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo={
      id:v4(),
      name: this.state.currentTodo, 
      isComplete:false}
    this.setState({
      todos: addTodo(this.state.todos,newTodo),
      currentTodo: ''
    })
  }

  handleEmptySubmit = (e) => {
    e.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleToggle = (id) => {
    //
    const getUpdatedTodos = pipe(findById,toggleTodo,partial(updateTodo, this.state.todos))
    const updatedTodos= getUpdatedTodos(id, this.state.todos)
    this.setState({
      todos: updatedTodos
    })
  }

  handleRemove = (id) => {
    const newTodos= removeTodo(this.state.todos, id)
    this.setState ({todos: newTodos})
  }

  render() {    
    const submitHandler= this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm 
            handleInputChange={this.handleInputChange} 
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />          
          <TodoList 
            todos={this.state.todos}
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
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
