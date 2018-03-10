import React from 'react';



export const TodoList = ({todos}) => (
  <div>
    <ul>
	    {todos.map(todo => 
	      <li key={todo.id}>
	        <input 
	        	type="checkbox" 
	        	defaultChecked={todo.isComplete}
	        />
	        {todo.name}
	      </li>
	    )}  
	 </ul>
  </div>
)