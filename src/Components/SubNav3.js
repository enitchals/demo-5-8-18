import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

export default class SubNav3 extends Component {
    render() {
        return (
            <div className="SubNav">
                <Link to="/3/X">OneX</Link> |&nbsp;
                <Link to="/3/Y">TwoY</Link> |&nbsp;
                <Link to="/3/Z">ThreeZ</Link> |&nbsp;
            </div>
    );
    }
}