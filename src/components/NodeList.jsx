import React, { Component } from 'react';
import 'axios';

import NodeItem from './NodeItem.jsx';

export class NodeList extends Component {

  componentDidMount() {
    //const node = axios.get('URL');
    const node = ["node1", "node2"]
    this.setState({node: node});
  }

  deleteSelected(mapNodeName) {
    const node = this.state.node
    updated_node = node.slice(node.indexOf(mapNodeName), 1)
    this.setState({node: updated_node, selected: ""})
  }

  NodeItems() {
    if (this.state.node.length === 0) return () => {return ""};
    return this.state.node.map((nodeitem) => {
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

      this.state = { node: [], selected: "" };
      this.NodeItems = this.NodeItems.bind(this)
  }


  render() {
      return(
          <ul>
            {this.NodeItems()}
          </ul>
      )
  }
}
