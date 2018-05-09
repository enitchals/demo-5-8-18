import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

export default class MainNav extends Component {
    render() {
        return (
            <div className="MainNav">
                <Link to="/1">One</Link> |&nbsp;
                <Link to="/2">Two</Link> |&nbsp;
                <Link to="/3">Three</Link> |&nbsp;
                <Link to="/4">Four</Link> |&nbsp;
                <Link to="/5">Five</Link> |&nbsp;
            </div>
    );
    }
}
