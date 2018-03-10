import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => (  
	<li>
		<span className="delete-item">
			<button 
				onClick={()=> props.handleRemove(props.id)}
			>
				X
			</button>
		</span>
		<input 
			type="checkbox" 
			checked={props.isComplete}
			onChange={() => props.handleToggle(props.id)}
		/>
		{props.name}
	</li>	 
)

TodoItem.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  id:PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  name: PropTypes.string.isRequired,
}