import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './components/todo'
import {addTodo,findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers'
import {partial, pipe} from './lib/utils'
import {loadTodos, createTodo, saveTodo, deleteTodo} from './lib/todoService'

class App extends Component {
  
  state ={
    todos: [
      
    ],      
  }    
  
  static contextTypes = {
    route: PropTypes.string
  }
  
  componentDidMount(){
    loadTodos()
      .then(todos => this.setState({todos}))
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
    createTodo(newTodo)
      .then(res => {
        this.setState({
          todos: addTodo(this.state.todos,newTodo),
          currentTodo: '',
        })
        return this.showTempMessage('Todo added')
      })    
  }

  showTempMessage = (msg) =>{
    this.setState({message: msg})
    setTimeout(()=> this.setState({message:''}), 500)
  }

  handleEmptySubmit = (e) => {
    e.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleToggle = (id) => {
    //
    const getToggledTodo = pipe(findById,toggleTodo)
    const updated = getToggledTodo(id, this.state.todos)
    saveTodo(updated)
      .then(() => {
        const getUpdatedTodos = pipe(findById,toggleTodo,partial(updateTodo, this.state.todos))
        const updatedTodos= getUpdatedTodos(id, this.state.todos)
        this.setState({
            todos: updatedTodos
        })
        return this.showTempMessage('Todo Updated')
      })    
  }

  handleRemove = (id) => {
    deleteTodo(id)
      .then(() => {
        const newTodos= removeTodo(this.state.todos, id)
        this.setState ({todos: newTodos})
        return this.showTempMessage('Todo Remove')
      })
    
  }

  

  render() {    
    const submitHandler= this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    const filtered= filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          {this.state.message && <span className="success">{this.state.message}</span>}
          <TodoForm 
            handleInputChange={this.handleInputChange} 
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />          
          <TodoList 
            todos={filtered}
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
          />
          <Footer/>
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
