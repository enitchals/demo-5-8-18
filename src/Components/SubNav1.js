import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

export default class SubNav1 extends Component {
    render() {
        return (
            <div className="SubNav">
                <Link to="/1/one">1One</Link> |&nbsp;
                <Link to="/1/two">2Two</Link> |&nbsp;
                <Link to="/1/three">3Three</Link> |&nbsp;
            </div>
    );
    }
}