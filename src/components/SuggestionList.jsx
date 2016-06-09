import React, { Component } from 'react';
import axios from 'axios';

import NodeItem from './NodeItem';

export class SuggestionList extends Component {

	constructor(props) {
	  super(props)

		this.state = { nodes: [] }
		this.suggestions = this.suggestions.bind(this)

		window.suggestionList = this;
	}

  getSuggestions(word) {
		axios.get(`http://52.196.226.197/word2vec/${word}`)
				.then(function(response) {
						const nodes = this.state.nodes;
						const suggested = response.data.ResultSet.words.map((obj) => {
							return obj[0];
						})
						if (suggested.length != 0) {

							nodes.splice(0,0, suggested[Math.floor(Math.random () * 10)])

							this.setState({ ...nodes })
						}
				}.bind(this));
	}

	deleteSelected() {
		const nodes = this.state.nodes;
		if (nodes.length == 1) {
			this.setState({
				nodes: []
			})
		} else if ($.inArray(window.selected, this.state.nodes)) {
			const updated_node = nodes;
			updated_node.splice(nodes.indexOf(window.selected),1)
			this.setState({
				nodes: updated_node
			})
		}
	}

	suggestions() {
		return this.state.nodes.map((nodeitem) => {
			return <NodeItem
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
		});
	}

  render() {
		return(
			<ul>
			  {this.suggestions()}
			</ul>
		)
	}

}
