import React, { Component } from 'react';
import logo from '../../Voleon.png';
import CardContainer from '../Card/card';
import './SignupPage.css';


class LoginPage extends Component {

    render() {
        return (
            <div className='loginPage_container'>
                <img src={ logo } className="App-logo" alt="logo"/>

                <CardContainer className="SignupCard" cardType='Signup'/>
            </div>
        );
    }
}

export default LoginPage;
