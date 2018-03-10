import React from 'react';

export const TodoForm = ({currentTodo='', handleInputChange}) => (
  <div>
    <form action="" id='idForm'>
      <input 
        type="text" 
        value={currentTodo} 
        onChange={handleInputChange}
      />
    </form>
  </div>
)
  
