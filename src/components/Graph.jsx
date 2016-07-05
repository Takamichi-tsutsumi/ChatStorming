import React, { Component } from 'react';
import mindGraph from '../model/mindGraph.js';

import axios from 'axios';

export class Graph extends Component {
    constructor(props) {
        super(props)

        this.state = {initialNodes: []}

        window.nodes = [];
        window.selected_node_list = [];
    }

    componentWillMount() {
        const url = location.href.split("/");
        const num = Number(url[url.length-1].split("?")[0]);

        axios.get(`http://153.126.215.94/api/project/${num}`).then(
            function(response) {
                this.setState({initialNodes: response.data.Nodes})
                this.renderGraph();
            }.bind(this)
        );
    }

    renderGraph() {
        window.graph = new mindGraph('.map');

        if (this.state.initialNodes.length != 0) {
            this.renderNodes();
        }
    }

    renderNodes() {

        const origin = this.state.initialNodes.find(function(node) {
            return node.parent_name === "";
        }).name;

        const addChildNode = function(parent) {
            const childrenNodes = this.state.initialNodes.filter(function(node) {
                return node.parent_name == parent;
            });

            for (var i=0; i < childrenNodes.length; i++) {
                var child = childrenNodes[i];
                graph.addChild(parent, child.name, true, child.color || "#ffb76a");
                addChildNode(child.name);
            }

        }.bind(this);

        graph.addNode(origin, true, "skyblue");
        addChildNode(origin);

    }

    render() {
        return(
            <div></div>
        )
    }
}
