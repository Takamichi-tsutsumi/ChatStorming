import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import SubList from './SubList.jsx'
import SpreadArea from './SpreadArea.jsx'

class FamilyList extends Component {
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
		axios.get(`http://153.126.215.94/api/project/${this.props.id}/families`).then((response) => {
			const families = response; // [{name: "name", nodes: []}, {}, ...]
			this.setState({ selected: families[0],
                      families: families
									  })
		})
  }

  subList() {
    return(
      this.state.families.map((family) => {
        if (family != this.state.selected.name) {
        <div class="fusen2">
          <span onClick>{family.name}</span>
        </div>
        }
      })
    )
  }



	render() {
    console.log(this)
		return(
			<div className="last_container">
        <div className="menubar">
          <img src="images/logo.png" alt/>
        </div>
        <div className="last_main">
          <div className="box4">
            <div className="box3">
              <SpreadArea selected={this.state.selected}/>
            </div>
            <div className="fusen_family">
              {this.subList()}
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default FamilyList;
