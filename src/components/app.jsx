import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import axios from 'axios';

import { Graph } from './Graph.jsx';
import { NodeList } from './NodeList.jsx';
import { SuggestionList } from './SuggestionList.jsx';
import { PostitList } from './PostitList.jsx';

export default class App extends Component {
    constructor(props) {

        super(props);
        this.state = { id: 0, done: false , initialNodes: []}

        window.App = this;
        window.selected = "";
        window.done = false;
    }

    componentDidMount() {
      const url = location.href.split("/");
      const num = Number(url[url.length-1].split("?")[0]);
      this.setState({ id: num })
    }

    changeComponent() {
      if (!this.state.done){
        return(
          <div>
            <div className="sub1">
              <SuggestionList />
            </div>
            <div className="box2">
              <div className="sub2">
                <NodeList />
              </div>
            </div>
          </div>
        )
      }else{
        return(
          <div>
            <PostitList id={this.state.id} />
          </div>
        )
      }
    }

    updateDone() {
      if (!this.state.done){

        SpeechRec.forceStopped = true;
        SpeechRec.stop();

      } else {

        SpeechRec.forceStopped = false;
        SpeechRec.start();

      }
      const done = !(this.state.done)
      window.done = done;
      this.setState({ done: done });

    }

    render() {
        return (
          <div className="app_container">
            <div className="box1">
              <div className="main">
                <Graph />
                <div className="menubar">
                  <Link to="/">
                  <img src="/images/logo.png" alt="" />
                  </Link>
                  <img
                  onClick={() => { this.updateDone() }}
                  src="/images/img_01.png"
                  className="icon"
                  alt=""
                  />
                  </div>
                <div className="map">
                </div>
              </div>
            { this.changeComponent() }
          </div>
        </div>
      );
    }
}
