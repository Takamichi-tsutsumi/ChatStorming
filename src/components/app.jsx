import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import { Graph } from './Graph.jsx';
import { NodeList } from './NodeList.jsx';
import { SuggestionList } from './SuggestionList.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { id: 0}
        window.selected = "";
    }

    componentDidMount() {
      console.log(this.props.params.id)
      this.setState({id: this.props.params.id})
    }

    render() {
        return (
          <div>
            <Graph />
            <NodeList />
            <SuggestionList />
          </div>
        );
    }
}
