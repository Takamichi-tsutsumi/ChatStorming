import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import axios from 'axios';

import { Form } from './form.jsx';

export default class Home extends Component {
    constructor(props) {
      super(props);

			this.state = { projects: [] }
    }

		project_link(self) {
		  return self.state.projects.map((project) => {
				return (
					<li key={ project["id"] }>
				  	<Link
						  to={`/project/${project["id"]}`}
						>{project["name"]}</Link>
					</li>
			  )
		  });
		}

		componentDidMount() {
		  axios.get('http://153.126.215.94/api').then((response) => {
				const projects = response.data.Project.map((obj) => {
					return {id: obj["id"], name: obj["name"]}
				})
				if (projects.length != 0) {
					this.setState({ projects: projects })
				}

			})
	  }

    render() {
        return (
          <div>
					  <Form />
            { this.project_link(this) }
						<Link to="/project">Link</Link>
          </div>
        );
    }
}
