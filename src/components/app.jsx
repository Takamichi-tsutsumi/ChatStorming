import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';

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
      this.setState({id: this.props.params.id})
    }

    render() {
        return (
          <div className="app_container">
            <div className="box1">
              <div className="main">
                <Graph />
                <div className="menubar">
                  <img src="/images/logo.png" alt="" />
                  <Link to="#">
                    <img
                      src="/images/img_01.png"
                      className="icon"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="map">
                </div>
              </div>
              <div className="sub1">
              <SuggestionList />
              </div>
            </div>
            <div className="box2">
              <div className="sub2">
                <NodeList />
              </div>
            </div>
          </div>
        );
    }
}
