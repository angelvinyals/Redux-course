import React from 'react'
import {Link} from '../router'

export const Footer = () =>{
	return(
		<div className='Footer'>
			<Link to='/'>All</Link>
			<Link to='/active'>active</Link>
			<Link to='/completed'>completed</Link>
		</div>	
	)
}