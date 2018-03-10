import React from 'react';
import PropTypes from 'prop-types';

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
 
TodoForm.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  handleInputChange: PropTypes.func,
  currentTodo: PropTypes.string,
}