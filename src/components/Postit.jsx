import React, { Component } from 'react';


export class Postit extends Component {
	constructor(props) {
			super(props)
	}

	render() {
		console.log(this.props)
		return(
			<div className="fusen2" key={this.props.key}>
			<span>
			{this.props.familyName}
			</span>
			</div>
		)
	}
}
