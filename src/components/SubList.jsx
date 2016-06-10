import React, { Component } from 'react';


export class SubList extends Component {
  render() {
		return(
			<div onClick={selected}>{this.props.family.name}</div>
		)
	}
}
