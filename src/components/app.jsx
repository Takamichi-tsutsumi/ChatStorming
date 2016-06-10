import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';

import { Graph } from './Graph.jsx';
import { NodeList } from './NodeList.jsx';
import { SuggestionList } from './SuggestionList.jsx';
import { PostitList } from './PostitList.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { id: 0, done: true }
        window.App = this;
        window.selected = "";
    }

    componentDidMount() {
      const url = location.href.split("/");
      const num = Number(url[url.length-1].split("?")[0]);
    }

    changeComponent() {
      if (this.state.done){
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

    render() {
        return (
          <div className="app_container">
            <button onClick={() => {
              this.setState({ done: !(this.state.done) });
              console.log(this.state)
            }}>
                {this.state.done?"編集終了":"編集へ戻る"}
              </button>
            <div className="box1">
              <div className="main">
                <Graph />
                <div className="menubar">
                  <Link to="/">
                  <img src="/images/logo.png" alt="" />
                  </Link>
                  <Link to="/">
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
            { this.changeComponent() }
          </div>
          </div>
        );
    }
}
