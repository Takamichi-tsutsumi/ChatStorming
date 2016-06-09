import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { NodeList } from './components/NodeList.jsx';
import { Graph } from './components/Graph.jsx';
import { SuggestionList } from './components/SuggestionList.jsx';


class App extends Component {
    constructor(props) {
        super(props);

        window.selected = "";
    }

    render() {
        return (
            <div>
              <Graph />
              <NodeList />
              <SuggestionList />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container'));
