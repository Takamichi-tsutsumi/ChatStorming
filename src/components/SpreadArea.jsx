import React, { Component } from 'react';


export class SpreadArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			node: this.props.node
		}
	}

	SpreadAreaChildren() {
		return (
			this.state.node.children.map((child) => {
				<div key={child}>{child}</div>
			})
		)
	}

	render() {
		return(
			<div className="fusen_member">
			<p>{this.state.name}</p>
			{this.SpreadAreaChildren()}
			</div>
		)
	}
}
