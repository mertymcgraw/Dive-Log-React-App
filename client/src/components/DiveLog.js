import React, { Component } from 'react';

import '../styles/App.css';

import AddDiveEntryForm from './AddDiveEntryForm'

class DiveLog extends Component {
  render() {
    return (
      <div className="App">
        <p>This is your LogBook</p>
        < AddDiveEntryForm addDive={this.props.addDive}/>
      </div>
    );
  }
}

export default DiveLog;
