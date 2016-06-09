import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { NodeList } from './components/NodeList.jsx';
import { Graph } from './components/Graph.jsx';


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
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container'));
