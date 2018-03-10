import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({currentTodo='', handleInputChange, handleSubmit}) => (
  <div>
    <form  id='idForm' onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={currentTodo} 
        onChange={handleInputChange}
      />
    </form>
  </div>
)
 
TodoForm.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  handleInputChange: PropTypes.func.isRequired ,
  currentTodo: PropTypes.string.isRequired ,
  handleSubmit: PropTypes.func.isRequired
}