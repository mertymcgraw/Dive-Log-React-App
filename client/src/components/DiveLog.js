import React, { Component } from 'react';
import axios from 'axios';

import '../styles/App.css';

import AddDiveEntryForm from './AddDiveEntryForm';
import DiveEntry from './DiveEntry';

class DiveLog extends Component {
    constructor(){
    super();

    this.addDive = this.addDive.bind(this);
    this.editDive = this.editDive.bind(this);
    this.removeDive = this.removeDive.bind(this);
 
    // initial state
    this.state = {
      dives: []
    }

  };

  componentWillMount(){
    axios.get('http://localhost:3001/')
      .then((response) => {
        this.setState({dives: response.data}) 
      });
    }


  addDive(dive){
    //update our state
    const dives = [...this.state.dives];
    dives.push(dive);
    //set state
    this.setState({ dives });
    //send post request
    axios.post('/dive_entries', dive)
  }

  editDive(index, new_dive_details){
    console.log(index)
    console.log(new_dive_details)
    const dives = [...this.state.dives];
    dives[index] = new_dive_details;
    this.setState({ dives });
  }

  removeDive(index) {
    const dives = [...this.state.dives];
    dives.splice(index, 1);
    this.setState({ dives });

  }

  render() {
    const displayDives = this.state.dives.map((dive, index) => {
      return <DiveEntry key={index} index={index} details={this.state.dives[index]} removeDive={this.removeDive} editDive={this.editDive}
      />
    })
    
    return (
      <div className="App">
        <p>This is your LogBook</p>
        <ul className="list-of-dives">
          { displayDives }
        </ul>
        < AddDiveEntryForm addDive={this.addDive}/>
      </div>
    );
  }
}

export default DiveLog;
