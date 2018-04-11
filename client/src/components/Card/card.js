import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
import {Card, Col} from 'react-materialize';
import LoginForm from '../LoginForm/loginForm';
import SignupForm from '../SignupForm/signupForm';
import NewPost from '../NewPost/NewPost';
import PostComment from '../PostComment/PostComment'
import NewcommentForm from '../NewcommentForm/NewcommentForm';
import './card.css';


class CardContainer extends Component {

    render() {

        let cardElement = '';
        let cardTitle = '';
        switch(this.props.cardType) {
            case 'Login':
                cardElement = <LoginForm/>;
                cardTitle = 'Login';
                break;
            case 'Signup':       
                cardElement = <SignupForm/>;
                cardTitle = 'Signup';
                break;
            case 'New Post':       
                cardElement = <NewPost/>;
                break;
            case 'New Comment':       
                cardElement = <NewcommentForm/>;
                break;
            case 'Post Comment':
                cardElement = <PostComment/>;
                break;            
            default:
                cardElement = <p>Invalid card items passed.</p>;
        }
        
        return (
            <div className="card-container">
                <Col m={6} s={6}>
                    <Card className='white darken-1 z-depth-3' title={cardTitle}>
                        {cardElement}
                    </Card>
                </Col>
            </div>
        );
    }
}

export default CardContainer;
