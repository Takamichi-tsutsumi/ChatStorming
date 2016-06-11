import React, { Component } from 'react';


export default class SubList extends Component {
  render() {
		return(
			<div
        onClick={this.props.selected_f}
        className={(this.props.family.name == this.props.state.selected)?"fusen2 selected2":"fusen2"}
        >
          {this.props.family.name}
        </div>
		)
	}
}
