import React, { Component } from 'react';
import Router, { Link } from 'react-router';
import axios from 'axios';


export class Form extends Component {
	mixins() {
		return [Router.Navigation]
	}
	constructor(props) {
		super(props)

		this.state = { name: "", theme: "" }
	}

	createProject() {
		if (this.state["name"] == "" || this.state["theme"] == "") {
			return {"message": "入力して下さい"}
		}
		axios.post('http://153.126.215.94/api/create',
			{ data: JSON.stringify(this.state) })
			.then((response) => {
				console.log(response);
				window.location.href = `./project/${response.data.Result.project_id}`;
			}).catch((response) => {
				console.log(response);
				alert(response.message)
			})
	}

  render() {
		return (
			<div id="newmap">
				<table>
					<tbody>
						<tr>
						  <th>プロジェクト名</th>
							<td><input
							  type="text"
								name="text"
								value={ this.state.name }
								onChange={(event) => this.setState({ name: event.target.value })}
							/></td>
						</tr>
						<tr>
						  <th>テーマ</th>
							<td><input
							  type="text"
								name="name"
								value={ this.state.theme }
								onChange={(event) => this.setState({ theme: event.target.value })}
							/></td>
						</tr>
					</tbody>
				</table>
				<button
				  className="btn2"
					onClick={ this.createProject.bind(this) }>
					新しいワークをする
				</button>
			</div>
		)
	}
}
