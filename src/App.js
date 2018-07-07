import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';

import Navigation from './Navigation';
import Home from './Home';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navigation />
          <Container fluid={true}>
            <Switch>
              <Route name="home" path="/" component={Home} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
