import React, { Component } from 'react';

import '../styles/App.css';

class DiveEntry extends Component {
  render() {
    const {details, index}  = this.props;
    return (
      <div className="App">
        <li>Dive No: {index + 1}</li>
        <li>Dive Site: {details.dive_site}, {details.location}</li>
        <li>Depth: {details.depth} </li>
        <li>Time: {details.time} </li>
        <li>Visability: {details.visability}</li>
        <li>Notes: {details.notes} </li>
        <button onClick={() => this.props.removeDive(index)}>Remove Dive</button>
      </div>
    );
  }
}


export default DiveEntry;
