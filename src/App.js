import React, { Component } from 'react';
import './App.css';
import Products from './components/produtos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products/>
      </div>
    );
  }
}

export default App;
