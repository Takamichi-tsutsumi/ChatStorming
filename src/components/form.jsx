import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';


export class Form extends Component {
	constructor(props) {
		super(props)

		this.state = { name: "", theme: "" }
	}

	createProject() {
		if (this.state["name"] == "" || this.state["theme"] == "") {
			return {"message": "入力して下さい"}
		}
		axios.post('http://153.126.215.94/api/create', JSON.stringify(this.state)).then((response) => {
			console.log(response);
			window.location.href = `./project/${response.id}`;
		}).catch((response) => {
		  console.log(response);
			alert(response.message)
		})
	}

  render() {
		return (
			<form>
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
			</form>
		)
	}
}
