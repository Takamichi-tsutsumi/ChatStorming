import React, { Component } from 'react';
import axios from 'axios';

export class PostitList extends Component {
	constructor(props) {
		super(props);

		this.state = { button: true, postit: {open: false, name: ""} }
	}

	postit() {
		if (this.state.postit.open) {
			return (
				<input
					value={ this.state.postit["name"] }
					onChange={(e) => {
						const postit = {open: true, name: e.target.value}
					  this.setState({ postit: postit })
					}}
				/>
		  )
		}
	}

	createFamily(nodes, member_name, project_id) {
		send_data = {
			"nodes": nodes,
			"member_name": member_name,
			"project_id": project_id
		}
		axios.post(`http://153.126.215.94/api/project/${this.props.id}/family/create`, send_data);
	}

	send_btn() {
		if (!(this.state.button)){
			return(
				<button
				  onClick={ () => this.createFamily(window.selectd_node_list, this.state.postit.name, this.props.id) }>
				  send
				</button>
			)
	  }
	}

	render() {
		return(
			<div>
				<div className="right">
				  <div className="postit">
					  {this.postit()}
					</div>
				</div>
				<div className="down">
	        <button onClick={() => {
						window.selectd_node_list = window.selected_node_list;
						this.setState(
							{ button: !(this.state.button),
								postit:
								{open: !(this.state.postit.open), name: this.state.postit.name }
							});
					}}
					>
					  {(this.state.button)?"グループ作成":"中止"}
					</button>
					{this.send_btn()}
				</div>
			</div>
		)
	}
}
