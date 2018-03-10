import React from 'react';
import PropTypes from 'prop-types';
import {TodoItem} from './TodoItem'

export const TodoList = ({todos, handleToggle, handleRemove}) => (
  <div>
    <ul>
	    {todos.map(todo => 
	    	<TodoItem 
	    		key={todo.id} 
	    		{...todo}
	    		handleToggle={handleToggle}
	    		handleRemove={handleRemove}
	    	/>)}  
	</ul>
  </div>
)

TodoList.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  todos: PropTypes.array.isRequired,
}