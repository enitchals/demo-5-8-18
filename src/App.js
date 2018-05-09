import React, { Component } from 'react';
import MainNav from './Components/MainNav';
import SubNav from './Components/SubNav';
import {Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav/>
        <SubNav/>
      </div>
    );
  }
}

export default App;
