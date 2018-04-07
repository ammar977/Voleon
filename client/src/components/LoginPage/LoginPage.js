import React, { Component } from 'react';
import logo from '../../Voleon.png';
import CardContainer from '../Card/card';
import './LoginPage.css';


class LoginPage extends Component {

    render() {
        return (
            <div className='loginPage_container'>
                <img src={ logo } className="App-logo" alt="logo"/>

                <CardContainer id="LoginCard" cardType='Login'/>
            </div>
        );
    }
}

export default LoginPage;
