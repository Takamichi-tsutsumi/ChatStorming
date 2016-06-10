import React, { Component } from 'react';


export class SpreadArea extends Component {
	constructor(props) {
		super(props);

	}

  SpreadAreaChildren(selected) {
		return (
			selected.nodes.map((node) => {
				return (
					<div className="fusen3">
				    <span>{node}</span>
				  </div>
				)
			})
		)
	}

	render() {
		return(
			<div className="fusen_member">
        {this.SpreadAreaChildren(this.props.selected)}
			</div>
		)
	}
}
