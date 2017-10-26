import React, { Component } from 'react';

import '../styles/DiveEntry.css';

class DiveCard extends Component{
  render(){
    const { details, index }  = this.props;
    return(
      <div className="dive-details-modal">
        <div className="modal-content">
          <li id="dive-number">Dive {index + 1}</li>
          <div id="dive-image-container">
            <img src="images/merty_dive.png"/>
          </div>
          
          <li className="dive-site"> {details.dive_site}</li>
          <li className="dive-location">{details.location}</li>
          <table className="center-content">
            <tbody>
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
            </tbody>
          </table>
          <div className="dive-notes">
            <li id="about-the-dive">About the dive</li>
            <li>{details.notes}</li>
          </div>
        </div>
      </div>

      )
  }
}

export default DiveCard;