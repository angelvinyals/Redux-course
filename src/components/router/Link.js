import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Link extends Component {

	static contextTypes = {
		route: PropTypes.string,
		linkHandler: PropTypes.func
	}
	
	handleClick =(evt) => {
		evt.preventDefault()
		this.context.linkHandler(this.props.to)
	}

	render(){
		const activeClass = this.context.route === this.props.to ? 'active': ''
		return <button className= {activeClass} onClick= {this.handleClick}>{this.props.children}</button>
	}
}

Link.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  to: PropTypes.string.isRequired,
}