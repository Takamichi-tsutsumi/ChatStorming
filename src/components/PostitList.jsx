import React, { Component } from 'react';
import axios from 'axios';

import { Postit } from './Postit.jsx';

export class PostitList extends Component {
	constructor(props) {
		super(props);

		this.state = { button: true, postit: {open: false, name: ""}, families: [] }
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

	createFamily(nodes, family_name, project_id) {
		// const nodes_text = nodes.join()
		const nodes_text = nodes.join(",")
		const send_data = JSON.stringify({
			"nodes": nodes_text,
			"name": family_name,
			"project_id": project_id
		})
		axios.post(`http://153.126.215.94/api/project/${this.props.id}/family/create`,
			{data: send_data}).then((response) => {
			var new_families = this.state.families.concat(family_name);
			this.setState({ button: true, postit: { open: false, name: "", madePostits: nodes }, families: new_families});
			console.log('tset')

			for(var i = 0; i < nodes.length; i++) {
				const index = window.nodes.indexOf(nodes[i])
				window.nodes.splice(index, 1)
			}

			if (window.nodes.length === 0) {
				setTimeout(() => {location.href = `/#/project/${project_id}/families`}, 5000)
			}

		});
	}

	send_btn() {
		if (!(this.state.button)){
			return(
				<button
				onClick={ () => {
					const selected_nodes = window.selected_node_list;
					this.createFamily(selected_nodes, this.state.postit.name, this.props.id);
					for (var i=0; i < selected_nodes.length; i++ ) {
						window.graph.removeNode(selected_nodes[i])
					}
					window.selected_node_list = [];
				}}>
				send
				</button>
			)
	  }
	}
	//
	// transitionToFamily() {
  //   window.open("./faimiles")
  // }

  postits() {
	  return this.state.families.map((family) => {
		  return(
			  <Postit
			  key={family}
			  familyName={family}
			  />
		  )
	  })
  }

  render() {
	  return(
		  <div>
		  <div className="down">
		  <div className="postit">
		  {this.postit()}
		  </div>

		  <button onClick={() => {
			  this.setState(
				  { button: !(this.state.button),
					  postit:
					  {open: !(this.state.postit.open), name: this.state.postit.name }
				  });
			  }}
			  >
			  {(this.state.button)?"グループ作成":"作成中止"}
			  </button>
			  {this.send_btn()}
			  </div>
			  <div className="right">
			  {this.postits()}
			  </div>
			  </div>
		  )
	  }
  }
