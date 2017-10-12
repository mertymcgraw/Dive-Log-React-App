import React, { Component } from 'react';


class AddDiveEntry extends Component {
  render() {
    return (
      <form className="add-entry">
        <input ref={(input) => this.location = input} type="text" placeholder="Location"/>
        <input ref={(input) => this.dive_site = input} type="text" placeholder="Dive Site"/>
        <input ref={(input) => this.time = input} type="number" placeholder="Dive Time in mins"/>
        <input red={(input) => this.visibility = input} type="number" placeholder="Visibility in meters"/>
        <input red={(input) => this.notes = input} type="text-field" placeholder="Notes"/>
        <button type="submit"> + Add Dive </button>
      </form>
    );
  }
}

export default AddDiveEntry;

