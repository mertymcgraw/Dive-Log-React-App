import React, { Component } from 'react';


class AddDiveEntryForm extends Component {
  createDiveEntry(event){
    event.preventDefault();
    console.log("gonna make a new dive")

    const dive = {
      location: this.location.value,
      dive_site: this.dive_site.value,
      depth: this.depth.value,
      time: this.time.value,
      visibility: this.visibility.value,
      notes: this.notes.value
    }
    this.props.addDive(dive)
    this.diveForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.diveForm = input} className="add-entry" onSubmit={(e) => this.createDiveEntry(e)}>
        <input ref={(input) => this.location = input} type="text" placeholder="Location"/>
        <input ref={(input) => this.dive_site = input} type="text" placeholder="Dive Site"/>
        <input ref={(input) => this.depth = input} type="number" placeholder="depth"/>
        <input ref={(input) => this.time = input} type="number" placeholder="Dive Time in mins"/>
        <input ref={(input) => this.visibility = input} type="number" placeholder="Visibility"/>
        <input ref={(input) => this.notes = input} type="text-field" placeholder="Notes"/>
        <button type="submit"> + Add Dive </button>
      </form>
    );
  }
}

export default AddDiveEntryForm;

