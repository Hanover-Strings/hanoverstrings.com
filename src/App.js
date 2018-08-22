import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';

import Header from './Header';
import Main from "./Main";
import Home from './Home';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <div className='App'>
          <Header />
          <Main />
          <Footer />
        </div>
    );
  }
}

export default App;
