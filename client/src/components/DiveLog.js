import React, { Component } from 'react';

import '../styles/App.css';

import AddDiveEntryForm from './AddDiveEntryForm';
import DiveEntry from './DiveEntry';

class DiveLog extends Component {
    constructor(){
    super();

    this.addDive = this.addDive.bind(this)
 
    // initial state
    this.state = {
      dives: []
    }

  };

  addDive(dive){
    //update our state
    const dives = [...this.state.dives]
    dives.push(dive)
    //set state
    this.setState({ dives })
  }


  render() {
    const displayDives = this.state.dives.map((dive, index) => {
      return <DiveEntry key={index} dive_no={index + 1} details={this.state.dives[index]} />
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
