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
			  className={this.props.className}
			>
			  <li><span>{ this.state.name }</span></li>
			</div>
		)
	}
}

export default NodeItem;
