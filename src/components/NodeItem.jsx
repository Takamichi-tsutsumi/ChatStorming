import React, { Component } from 'react';

class NodeItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.nodeitem
		}
	}

	render() {
		return (
			<div
			  onClick={() => {this.props.selected_change(this.state.name)}}
			>
			  <li className={"fusen " + this.props.className} ><span>{ this.state.name }</span></li>
			</div>
		)
	}
}

export default NodeItem;
