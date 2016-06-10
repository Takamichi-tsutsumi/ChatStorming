import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app.jsx';
import Home from './components/home.jsx';
import Landing from './components/landing.jsx';

ReactDOM.render((
  <Router history={ hashHistory }>
		<Route path="/" component={ Home }/>
      <Route path="lp" component={ Landing }/>
		  <Route path="project/:project_id" component={ App }/>
	</Router>
),document.querySelector('.container'));
