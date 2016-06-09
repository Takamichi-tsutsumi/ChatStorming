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
			<div>
				<ul>
				  <span>Project name </span>
					<input
					  className="name"
						value={ this.state.name }
						onChange={(event) => this.setState({ name: event.target.value })}
					/>
				</ul>
				<ul>
				  <span>Theme </span>
					<input
					  className="theme"
						value={ this.state.theme }
						onChange={(event) => this.setState({ theme: event.target.value })}
					/>
				</ul>
				<ul>
					<button onClick={ this.createProject.bind(this) }>Click here!</button>
				</ul>
			</div>
		)
	}
}
