import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { NodeList } from './components/NodeList.jsx';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <div>Hello App</div>
            <NodeList />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container'));
