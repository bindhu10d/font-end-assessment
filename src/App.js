import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeComponent from './components/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
              <Route exact path="/" component={HomeComponent} />
            </div>
     </Router>
    );
  }
}

export default App;
