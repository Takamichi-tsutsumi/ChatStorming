import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import axios from 'axios';

import { Form } from './form.jsx';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { projects: [] }

        axios.get('http://153.126.215.94/api').then((response) => {
            const projects = response.data.Project.map((obj) => {
                return {id: obj["id"], name: obj["name"]}
            })
            if (projects.length != 0) {
                this.setState({ projects: projects })
            }
        })

    }

    project_link(self) {
        return self.state.projects.map((project) => {
            return (
                <tr key={ project["id"] }>
                <td>20160603 19:00</td>
                <td>チーム / {project["name"]}</td>
                <td>
                <Link to={`/project/${project["id"]}`}>
                <img src="/images/img_03.png" alt="" />
                </Link>
                </td>
                </tr>
            )
        });
    }

    componentDidMount() {
        // (function() {
        //     $(".history td a").mouseover(function(){
        //         $("img", this).attr("src","images/img_03.png")
        //     }).mouseout(function(){
        //         $("img", this).attr("src","images/img_02.png")
        //     });
        // })();
    }

    render() {
        return (
            <div className="home_container">
            <div className="top">
            <Link to="/"><img src="/images/logo.png" alt="" /></Link>
            </div>
            <div className="new">
            <Form action="#" />
            </div>
            <div className="history">
            <p>■ 過去のワーク ■</p>
            <table>
            <tbody>
            { this.project_link(this) }
            </tbody>
            </table>
            </div>
            </div>
        );
    }
}
