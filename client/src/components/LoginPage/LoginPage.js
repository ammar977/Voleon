import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
import {Card, Col} from 'react-materialize';
// import LoginForm from '../LoginForm/loginForm';
import CardContainer from '../Card/card';
// import SignupForm from '../SignupForm/signupForm';
import './LoginPage.css';


class LoginPage extends Component {

    render() {
        return (
            <div className='loginPage_container'>
                <h1>loginpage</h1>

                <CardContainer cardType='Login'/>
            </div>
        );
    }
}

export default LoginPage;
