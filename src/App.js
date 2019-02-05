import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import TourList from './components/tourlist';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
