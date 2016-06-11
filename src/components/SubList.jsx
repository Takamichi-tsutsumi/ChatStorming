import React, { Component } from 'react';


export class SubList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div onClick={selected}>{this.props.family.name}</div>
        )
    }
}
