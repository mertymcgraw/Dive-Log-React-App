import React, { Component } from 'react';

import '../styles/App.css';

import AddDiveEntryForm from './AddDiveEntryForm';
import DiveEntry from './DiveEntry';

class DiveLog extends Component {
    constructor(){
    super();

    this.addDive = this.addDive.bind(this);
    // this.updateDive = this.updateDive.bind(this);
    this.removeDive = this.removeDive.bind(this);
 
    // initial state
    this.state = {
      dives: []
    }

  };

  addDive(dive){
    //update our state
    const dives = [...this.state.dives];
    dives.push(dive);
    //set state
    this.setState({ dives });
  }

  // updateDive(index, dive){
  //   const dives = [...this.state.dives];
  //   dives[index] = updatedDive;
  //   this.setState({ dives });
  // }

  removeDive(index) {
    const dives = [...this.state.dives];
    dives.splice(index, 1);
    this.setState({ dives });

  }

  render() {
    const displayDives = this.state.dives.map((dive, index) => {
      return <DiveEntry key={index} index={index} details={this.state.dives[index]} removeDive={this.removeDive} 
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
