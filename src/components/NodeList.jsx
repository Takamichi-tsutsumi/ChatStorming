import React, { Component } from 'react';
import axios from 'axios';

import NodeItem from './NodeItem.jsx';
import Speech from '../model/speech.js';

export class NodeList extends Component {

  constructor(props) {
      super(props)
      window.nodeList = this;

      this.state = { nodes: []};
      this.nodeItems = this.nodeItems.bind(this)
      Speech(this);
  }

  componentDidMount() {
    const nodes = ["node1", "node2"]
    this.setState({
        nodes: nodes
    });
  }

  deleteSelected() {
      const nodes = this.state.nodes
      console.log(nodes);
      if (nodes.length == 1) {
          this.setState({
              nodes: []
          })
      } else {
          const updated_node = nodes;
          updated_node.splice(nodes.indexOf(window.selected),1)
          this.setState({
              nodes: updated_node
          })
      }
  }

  nodeItems() {
    if (this.state.nodes.length === 0) return () => {return ""};
    return this.state.nodes.map((nodeitem) => {
        return (
            <NodeItem
            className={ window.selected == nodeitem ? "selected" : "" }
            key={nodeitem}
            nodeitem={nodeitem}
            selected_change={
              () => {
                window.selected = nodeitem;
                this.forceUpdate()
              }
            }
             />
        )
    })
  }

  addWords(result) {
      if (result != "") {

          const updated_nodes = this.state.nodes;
          updated_nodes.splice(0, 0, result);
          
          this.setState({
              nodes: updated_nodes
          })
      }
  }

  render() {
    return(
      <ul>
        {this.nodeItems()}
      </ul>
    )
  }
}
