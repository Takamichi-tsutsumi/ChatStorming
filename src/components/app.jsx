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
            <div className="boxl">
              <div className="main">
                <Graph />
                <div className="menubar">
                  <img src="images/logo.png" alt="" />
                  <Link to="#">
                    <img
                      src="image/img_02.png"
                      className="icon"
                      alt=""
                    />
                  </Link>
                  <Link to="#">
                    <img
                      src="image/img_01.png"
                      className="icon"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="map">
                <img src="images/img_07.png" alt="" />
              </div>
            </div>
            <div className="subl">
              <SuggestionList />
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
