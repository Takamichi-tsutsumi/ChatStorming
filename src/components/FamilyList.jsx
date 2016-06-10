import React, { Component } from 'react';


export class FamilyList extends Component {
  constructor(props) {
		super(props)

		this.state = { selectedFamily: "", families: [] }
	}

	render() {
		return(
			<div>This is FamilyList!</div>
		)
	}


}
