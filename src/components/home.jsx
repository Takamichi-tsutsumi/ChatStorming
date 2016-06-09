import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
					This is Home
						<Link to="/project"> Link</Link>
          </div>
        );
    }
}
