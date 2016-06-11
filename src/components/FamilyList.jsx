import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class FamilyList extends Component {
    constructor(props) {
        super(props);

        this.state = { selected: {name: "", children: []},
        families: []}
    }


    getFamilies() {
        axios.get(`http://153.126.215.94/api/project/${window.id}/families`).then((response) => {
            console.log(response.data.Families)
            const families = response.data.Families.map((family) => {
                return {name: family.name, children: family.nodes.split(",")}
            })
            this.setState({ selected: families[0],
                families: families
            })
        })
    }

    componentDidMount() {
        $('body').css('background', 'url("/images/note.jpg")')
        const url = location.href.split("/");
        window.id = Number(url[url.length-2].split("?")[0]);

        this.getFamilies();
    }

    componentWillUpdate() {

    }

    onSelectChange(familly) {
        this.setState({
            selected: family
        })
    }

    subList(families) {
        if (families.length != 0) {
            return(
                this.state.families.map((family) => {
                    return(
                        <div
                        className="fusen2"
                        key={ family.name }
                        >
                        <span id={family.name} onClick={function() {this.setState({selected: family})}.bind(this)}
                        >
                        { family.name }
                        </span>
                        </div>
                    )
                }
            )
        )
    }
}

    spreadAreaChildren() {
        return (
            this.state.selected.children.map((child) => {
                return (
                    <div key={child} className="fusen3">
                    {child}
                    </div>
                )
            })
        )
    }

    nextFusen() {
        var nextIndex = this.state.families.indexOf(this.state.selected);
        if (nextIndex == this.state.families.length) {
            nextIndex = 0;
        } else {
            nextIndex = nextIndex + 1;
        }

        return this.state.families[nextIndex];

    }

    render() {
        return (
            <div className="last_container">
            <div className="menubar">
            <img src="/images/logo.png" />
            </div>
            <div className="last_main">
            <div className="box4">
            <div className="box3">
            <div className="fusen_member">
            <p>{this.state.selected.name}</p>
            {this.spreadAreaChildren()}
            </div>
            </div>
            <div className="fuse_family">
            {this.subList(this.state.families)}
            </div>
            </div>
            </div>
            </div>
        )
    }
}
