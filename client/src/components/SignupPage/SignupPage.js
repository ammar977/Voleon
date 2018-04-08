import React, { Component } from 'react';
import logo from '../../Voleon.png';
import CardContainer from '../Card/card';
import './SignupPage.css';


class SignupPage extends Component {

    render() {
        return (
            <div className='signupPage_container'>
                <img src={ logo } className="App-logo" alt="logo"/>

                <CardContainer cardType='Signup'/>
            </div>
        );
    }
}

export default SignupPage;
