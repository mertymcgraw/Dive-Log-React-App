import React, { Component } from 'react';

import '../styles/App.css';

import DiveLog from './DiveLog'

class App extends Component {
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
    return (
      <div className="App">
        < DiveLog addDive={this.addDive} />
      </div>
    );
  }
}

export default App;
