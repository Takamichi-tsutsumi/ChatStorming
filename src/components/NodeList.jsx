import React, { Component } from 'react';
import 'axios';

import NodeItem from './NodeItem.jsx';

export class NodeList extends Component {

  componentDidMount() {
    //const node = axios.get('URL');
    const node = ["node1", "node2"]
    this.setState({nodes: node});
  }

  deleteSelected() {
    const nodes = this.state.nodes
    const updated_node = nodes;
    console.log(updated_node)
    updated_node.splice(nodes.indexOf(window.selected),1)
    this.setState({nodes: updated_node})
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
              window.selected = nodeName;
            }}
             />
          )
    })
  }

  constructor(props) {
      super(props)

      this.state = { nodes: []};
      this.nodeItems = this.nodeItems.bind(this)
  }


  render() {
      return(
          <ul>
            {this.nodeItems()}
          </ul>
      )
  }
}
