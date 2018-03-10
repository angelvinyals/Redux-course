import React from 'react';

export const TodoForm = (props) => (
  <div>
    <form action="" id='idForm'>
      <input 
        type="text" 
        value={props.currentTodo} 
        onChange={props.handleInputChange}
      />
    </form>
  </div>
)
  
