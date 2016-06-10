import React, { Component } from 'react';


export class SpreadArea extends Component {
	constructor(props) {
		super(props);

	}

  SpreadAreaChildren() {
		return (
			this.props.selected.children.map((child) => {
				<div>{child}</div>
			})
		)
	}

	render() {
		return(
			<div>
			  <div>
				  {this.props.selected.name}
				</div>
				{this.SpreadAreaChildren()}
			</div>
		)
	}
}
