import React, { Component } from 'react';
import axios from 'axios';

import NodeItem from './NodeItem.jsx';
import Speech from '../model/speech.js';
import _ from 'lodash';


class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = { word: "" };
    }

    handleNewWord() {
        this.props.handleNewWord(this.state.word);
        this.setState({ word: "" });
    }

    render() {
        return (
            <div>
            <input
            className="post-input"
            type="text" value={ this.state.word }
            onChange={
                (event) => { this.setState({ word: event.target.value }) }
            }
            />
            <button className="post-form-button" onClick={ this.handleNewWord.bind(this) }>New Word</button>
            </div>

        )
    }
}


export class NodeList extends Component {

    constructor(props) {
        super(props)
        window.nodeList = this;

        this.state = { nodes: [] };
        this.nodeItems = this.nodeItems.bind(this)
        window.wordCount = 0;
    }

    componentDidMount() {
        Speech(this);
        SpeechRec.forceStopped = false;
    }

    deleteSelected() {
        const nodes = this.state.nodes;
        if ($.inArray(window.selected, this.state.nodes) != -1){
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

    addWords(text) {
        if (text != "") {
            $.ajax({
                type: 'post',
                url: 'http://153.126.215.94/api/morphologic',
                data: JSON.stringify({ text: text }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(response) {
                    const updated_nodes = this.state.nodes;
                    $.each(response.keywords, function() {
                        console.log(this);
                        if ($.inArray(this, updated_nodes) == -1) {
                            updated_nodes.splice(0, 0, this);
                        }
                    })
                    this.setState({
                        nodes: updated_nodes
                    })
                }.bind(this),
                error: function(response) {
                    console.log(response);
                }
            });
        }
    }

    addNewWord(word) {
        console.log(word);

        const nodes = this.state.nodes.concat(word);
        console.log(nodes)
        this.setState({ nodes })
    }



    render() {
        return(
            <div>
                <PostForm handleNewWord={ this.addNewWord.bind(this) } />
                <ul>{ this.nodeItems() }</ul>
            </div>
        )
    }
}
