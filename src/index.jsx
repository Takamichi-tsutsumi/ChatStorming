import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app.jsx'
import Home from './components/home.jsx'

ReactDOM.render((
  <Router history={ hashHistory }>
		<Route path="/" component={ Home }/>
		  <Route path="project/:project_id" component={ App }/>
	</Router>
),document.querySelector('.container'));
