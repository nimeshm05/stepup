import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Growth from './components/Growth';
import About from './components/About';
import Contact from './components/Contact'
import Gallery from './components/Gallery'
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
          <Route path='/contact' component = {Contact} />
          <Route path='/gallery' component= {Gallery} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
