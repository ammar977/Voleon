import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
import {Card, Col} from 'react-materialize';
import LoginForm from '../LoginForm/loginForm';
import SignupForm from '../SignupForm/signupForm';
import './card.css';


class CardContainer extends Component {

    render() {
        let cardElement = '';
        switch(this.props.cardType) {
            case 'Login':
                cardElement = <LoginForm/>;
                break;
            case 'Signup':
                cardElement = <SignupForm/>;
                break;
            default:
                cardElement = <p>Invalid card items passed.</p>;
        }

        return (
            <div className="cardContainer">
                <Col m={6} s={6}>
                    <Card className='white darken-1 z-depth-3' title={this.props.cardType}>
                        {cardElement}
                    </Card>
                </Col>
            </div>
        );
    }
}

export default CardContainer;
