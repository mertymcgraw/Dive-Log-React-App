import React, { Component } from 'react';

import '../styles/App.css';

class DiveEntry extends Component {
  constructor(){
    super();
    this.state = {
      isEditing: false
    }

    this.renderForm = this.renderForm.bind(this);
    this.renderDiveEntry = this.renderDiveEntry.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateDiveEntry = this.updateDiveEntry.bind(this);

  }



  toggleState(){
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    })
  }

   updateDiveEntry(event){
    event.preventDefault();
    const new_dive = {
      location: this.location.value,
      dive_site: this.dive_site.value,
      depth: this.depth.value,
      time: this.time.value,
      visibility: this.visibility.value,
      notes: this.notes.value

    }

    this.props.editDive(this.props.index, new_dive)
    this.toggleState()
  }

    renderForm(){
    const { details }  = this.props;
      return (
        <form onSubmit={this.updateDiveEntry}>
          <input type="text" ref={(input) => this.location = input} defaultValue={details.location}/>
          <input type="text" ref={(input) => this.dive_site = input} defaultValue={details.dive_site}/>
          <input type="number" ref={(input) => this.depth = input} defaultValue={details.depth}/>
          <input type="number" ref={(input) => this.time = input} defaultValue={details.time}/>
          <input type="number" ref={(input) => this.visibility = input} defaultValue={details.visibility}/>
          <input type="text-field" ref={(input) => this.notes = input} defaultValue={details.notes}/>
          <button type="submit">Update Dive</button>
        </form>
      )
    }

    renderDiveEntry(){
    const { details, index }  = this.props;
      return(
        <div>
          <li>Dive No: {index + 1}</li>
          <li>Dive Site: {details.dive_site}, {details.location}</li>
          <li>Depth: {details.depth} </li>
          <li>Time: {details.time} </li>
          <li>Visability: {details.visibility}</li>
          <li>Notes: {details.notes} </li>
          <button onClick={() => this.toggleState()}>Edit</button>
          <button onClick={() => this.props.removeDive(index)}>Remove Dive</button>
        </div>
      )
    }

  render() {
    
    const { isEditing } = this.state;
    return (
      <div className="App">
       { isEditing ? this.renderForm() : this.renderDiveEntry() }
      </div>
    );
  }
}


export default DiveEntry;
