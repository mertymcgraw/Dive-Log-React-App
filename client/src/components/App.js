import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom'
import '../styles/App.css';

import DiveLog from './DiveLog';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <Router >
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/divelog' component={DiveLog} />
        </div>      
      </Router>
    );
  }
}

export default App;
