import React, { Component } from 'react';
import SubNav1 from './SubNav1';
import SubNav2 from './SubNav2';
import SubNav3 from './SubNav3';
import {Link, Route} from 'react-router-dom';

class SubNav extends Component {
  render() {
    return (
      <div className="SubNav">
        <Route path="/1" component={SubNav1}/>
        <Route path="/2" component={SubNav2}/>
        <Route path="/3" component={SubNav3}/>
      </div>
    );
  }
}

export default SubNav;
