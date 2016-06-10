import React, { Component } from 'react';
import mindGraph from '../model/mindGraph.js';

import axios from 'axios';

export class Graph extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.graph = new mindGraph('.map');

        renderNodes();
    }

    renderNodes() {

        const origin = this.props.nodes.find(function(node) {
            return node.parent_name === "";
        }).name;

        const addChildNode = function(parent) {
            const childrenNodes = this.props.nodes.filter(function(node) {
                return node.parent_name == parent;
            });

            for (var i=0; i < childrenNodes.length; i++) {
                var child = childrenNodes[i].name;
                graph.addChild(parent, child);
                addChildNode(child);
            }

        }

        graph.addNode(origin);
        addChildNode(origin);

    }

    render() {
        return(
            <div></div>
        )
    }
}
