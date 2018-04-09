import React, { Component } from 'react';
// import CardContainer from '../Card/card';
import logo from '../../Voleon.png';
import './Navbar.css';


class Navbar extends Component {

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper blue lighten-1">
                        <img src={ logo } className="App-logo" alt="logo"/>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Newsfeed</a></li>
                            <li><a href="#">Elections</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
