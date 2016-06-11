import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app.jsx';
import Home from './components/home.jsx';
import SubList from './components/SubList.jsx';
import FamilyList from './components/FamilyList.jsx';

ReactDOM.render((
  <Router history={ hashHistory }>
		<Route path="/" component={ Home }/>
    <Route path="project/:project_id/families" component={ FamilyList }/>
		<Route path="project/:project_id" component={ App }/>
	</Router>
),document.querySelector('.container'));
