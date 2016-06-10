import React, { Component } from 'react';


export class Postit extends Component {
	constructor(props) {
			super(props)
	}

	render() {
		console.log(this.props)
		return(
			<div key={this.props.key}>{this.props.familyName}</div>
		)
	}
}
