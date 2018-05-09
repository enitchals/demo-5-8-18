import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

export default class SubNav2 extends Component {
    render() {
        return (
            <div className="SubNav">
                <Link to="/2/A">One-A</Link> |&nbsp;
                <Link to="/2/B">Two-B</Link> |&nbsp;
                <Link to="/2/C">Three-C</Link> |&nbsp;
            </div>
    );
    }
}