import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import SubList from './SubList.jsx'
import SpreadArea from './SpreadArea.jsx'

export class FamilyList extends Component {
  constructor(props) {
		super(props);

		this.state = { slected: {name: "", children: []},
                   families: []
								 }
	}

  componentDidMount() {
		this.getFamilies()
	}

  getFamilies() {
		// axios.get(`http://153.126.215.94/api/project/${this.props.id}/families`).then((response) => {
		// 	window.all_families = response;
		//   const families = response.map((family) => {
		// 		return {name: family.name, children: family.nodes.split(",")}
		// 	})
		// 	this.setState({ selected: families[0],
    //                   families: families.splice(0, 1)
		// 							  })
		// })
    window.all_families = [{id:1,name:"taro",children:["node1","node2"]},
                  {id:2,name:"takashi",children:["node5","node4"]},
                  {id:23,name:"tnonoyama",children:["node6","node9"]}]
    this.setState({ selected: window.all_families[0], families: window.all_families.splice(0,1) })
	}

  subList(families) {
		return families.map((family) => {
			return(
				<SubList
			    family={family}
					slected={() => {
						const selected = family;
						const families = window.all_families.filter((value) => {
							if (value.name != family.name){
								return {name: value.name, children: value.nodes.split(",")}
							}
						})
						this.setState({ selected: selected, families: families });
					}}
			  />);
        console.log(this.state)
		})
	}


	render() {
		return(
			<div>
        <div>
          <SpreadArea selected={ this.state.selected } />
        </div>
        <div>
				  {this.subList(this.state.families)}
        </div>
			</div>
		)
	}
}
