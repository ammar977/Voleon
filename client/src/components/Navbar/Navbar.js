import React, { Component } from 'react';
// import CardContainer from '../Card/card';
import logo from '../../Voleon.png';
import './Navbar.css';


class Navbar extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue lighten-1">
                    <a href="#" className="brand-logo"><img src={ logo } className="App-logo" alt="logo"/></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down text-black">
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Newsfeed</a></li>
                        <li><a href="#">Elections</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
