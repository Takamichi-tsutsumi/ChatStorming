import React, { Component } from 'react';
import mindGraph from '../model/mindGraph.js';

export class Graph extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.graph = new mindGraph('.graph');
        graph.addNode('Test');
    }

    render() {
        return(
            <div className="graph"></div>
        )
    }
}
