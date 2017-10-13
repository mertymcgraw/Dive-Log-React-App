import React, { Component } from 'react';

import '../styles/App.css';

class DiveEntry extends Component {
  render() {
    const details = this.props.details
    return (
      <div className="App">
        <li>Dive No: {this.props.dive_no}</li>
        <li>Dive Site: {details.dive_site}, {details.location}</li>
        <li>Depth: {details.depth} </li>
        <li>Time: {details.time} </li>
        <li>Visability: {details.visability}</li>
        <li>Notes: {details.notes} </li>
      </div>
    );
  }
}


export default DiveEntry;
