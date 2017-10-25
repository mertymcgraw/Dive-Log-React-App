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
    //send post request
    axios.post('/dive_entries', dive)
    .then((response) => {
    //update state
     const dives = [...this.state.dives];
      dives.push(response.data);
    this.setState({ dives });
      })
  }

  editDive(index, new_dive_details){
    axios.put('/dive_entries/' + new_dive_details.id, new_dive_details )

  }

  removeDive(details, index) {
    const dives = [...this.state.dives];
    dives.splice(index, 1);
    this.setState({ dives });
    axios.delete('/dive_entries/' + details.id)

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
