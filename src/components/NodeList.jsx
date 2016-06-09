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
    updated_node.splice(nodes.indexOf(this.state.selected),1)
    this.setState({nodes: updated_node, selected: ""})
  }

  nodeItems() {
    if (this.state.nodes.length === 0) return () => {return ""};
    return this.state.nodes.map((nodeitem) => {
          return (
            <NodeItem
            className={ this.state.selected == nodeitem ? "selected" : "" }
            key={nodeitem}
            nodeitem={nodeitem}
            selected_change={(nodeName) => {
              this.setState({selected: nodeName});
              window.selected = nodeName;
            }}
             />
          )
    })
  }

  constructor(props) {
      super(props)

      this.state = { nodes: [], selected: "" };
      this.nodeItems = this.nodeItems.bind(this)
  }


  render() {
      return(
          <ul>
            <button onClick={() => this.deleteSelected()} />
            {this.nodeItems()}
          </ul>
      )
  }
}
