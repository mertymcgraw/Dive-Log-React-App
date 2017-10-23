import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom'
import '../styles/App.css';

class Home extends Component {


  render (){
    return(
      <div>
        <div id="vid-section">
         <video id="bgvideo" preload="auto" autoPlay="true" loop="loop" muted="muted">
          <source src="manta.mp4" type="video/mp4" />
        </video>
      </div>


      <div className="logo-section">
        <img src="white-cs-logo.png"/>
        <Link to="/divelog" className="entry-button">Log Book</Link>
      </div>

    </div>
      )
  }
}


export default Home;