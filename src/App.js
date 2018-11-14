import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Lessons from './pages/Lessons/Lessons';
import Rentals from './pages/Rentals/Rentals';
import Repairs from './pages/Repairs/Repairs';


class App extends Component {
  render() {
    return (
        <div className='App'>
        <Router>
          <div>
          <Header />
          <Container fluid={true}>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/lessons' component={Lessons}/>
              <Route path='/rentals' component={Rentals}/>
              <Route path='/repairs' component={Repairs}/>
            </Switch>
          </Container>
          <Footer />
          </div>
          </Router>
        </div>
    );
  }
}

export default App;
