import React, { Component } from 'react';

import '../styles/DiveEntry.css';

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
    const new_dive = this.props.details
      new_dive.location = this.location.value
      new_dive.dive_site = this.dive_site.value
      new_dive.depth = this.depth.value
      new_dive.time = this.time.value
      new_dive.visibility = this.visibility.value
      new_dive.notes = this.notes.value

    this.props.editDive(this.props.index, new_dive)
    this.toggleState()
  }

    renderForm(){
    const { details }  = this.props;
      return (
        <form onSubmit={this.updateDiveEntry}>
          <input type="text" ref={(input) => this.location = input} defaultValue={details.location}/>
          <input type="text" ref={(input) => this.dive_site = input} defaultValue= {details.dive_site}/>
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
        <div className="dive-entry">
          <div className="dive-thumb">
            <img src={details.image}/>
          </div>
          <div className="dive-details">
            <div className="primary-dive-details">
              <li className="dive-site"> {details.dive_site}</li>
              <li className="dive-location">{details.location}</li>
              <li>Dive No: {index + 1}</li>
            </div>
            <div className="dive-details-modal">
              <div className="modal-content">
                <li>Dive {index + 1}</li>
                <img src="images/merty_dive.png"/>
                <li className="dive-site"> {details.dive_site}</li>
                <li className="dive-location">{details.location}</li>
                <table className="center-content">
                  <tr>
                    <th><img id="ruler"src="images/grey_ruler.png"/></th>
                    <th><img src="images/grey_watch.png"/></th>
                    <th><img src="images/grey_mask.png"/></th>
                  </tr>
                  <tr>
                    <th>{details.depth} meters</th>
                    <th>{details.time} mins</th>
                    <th>{details.visibility}m vis</th>
                  </tr>
                </table>
                <li className="dive-notes">About the dive</li>
                <li>{details.notes}</li>
              </div>
            </div>
          </div>
            <button className="delete-dive" onClick={() => this.props.removeDive(details, index)}>X</button>
            <button className="edit-dive" onClick={() => this.toggleState()}>Edit</button>
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
