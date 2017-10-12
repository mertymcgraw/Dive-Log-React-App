import React, { Component } from 'react';

import '../styles/App.css';

import DiveLog from './DiveLog'
import AddDiveEntry from './AddDiveEntry'

class App extends Component {
  render() {
    return (
      <div className="App">
        < DiveLog />
        < AddDiveEntry />
      </div>
    );
  }
}

export default App;
