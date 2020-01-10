import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Growth from './components/Growth';
import About from './components/About';
import Services from './components/Services'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component = {Home} />
          <Route path='/home' component = {Home} />
          <Route path='/about' component = {About} />
          <Route path='/growth' component = {Growth} />
          <Route path='/services' component = {Services} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
