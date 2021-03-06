import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
import {Card, Col} from 'react-materialize';
import LoginForm from '../LoginForm/loginForm';
import SignupForm from '../SignupForm/signupForm';
import NewPost from '../NewPost/NewPost';
import PostComment from '../PostComment/PostComment'
import NewcommentForm from '../NewcommentForm/NewcommentForm';
import CandidateApp from '../CandidateApp/CandidateApp'
import './card.css';
import OneButton from '../OneButton/OneButton';
import SelectSeat from '../SelectSeat/SelectSeat';
import ImportantDates from '../ImportantDates/ImportantDates';
import CandidatesList from '../CandidatesList/CandidatesList';
import SpeechDates from '../SpeechDates/SpeechDates';
import VoteNow from '../VoteNow/VoteNow';
import NewElection from '../NewElection/NewElection';
import VoterCounts from '../VoterCounts/VoterCounts';
import VoterTurnout from '../VoterTurnout/VoterTurnout';


class CardContainer extends Component {

    render() {
        // console.log('in card', this.props.cardText);
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
            case 'One Button':
                cardElement = <OneButton cardText={this.props.cardText}/>
                break;
            case 'Post Comment':
                cardElement = <PostComment post={this.props.post}/>;
                break;            
            case 'Select Seat':
                cardElement = <SelectSeat/>;
                cardTitle = 'Select Seat';
                break;
            case 'Archive':
                cardElement = <SelectSeat/>;
                cardTitle = 'Archived Elections';
                break;
            case 'Application':
                cardElement = <CandidateApp/>;
                cardTitle = 'Candidate Application';
                break;    
            case 'New Election':
                cardElement = <NewElection/>;
                cardTitle = 'New Election';
                break;      
            case 'Important Dates':
                cardElement = <ImportantDates dates={this.props.dates}/>;
                cardTitle = 'Important Dates';
                break;
            case 'Candidates List':
                cardElement = <CandidatesList candidates={this.props.candidates}/>;
                cardTitle = 'List of Candidates';
                break;
            case 'Speech Dates':
                cardElement = <SpeechDates/>;
                cardTitle = 'Speech Dates and Venues';
                break;
            case 'Vote Now':
                cardElement = <VoteNow/>;
                cardTitle = 'List of Candidates';
                break;
            case 'Voter Turnout':
                cardElement = <VoterCounts/>;
                cardTitle = 'Voter Turnout';
                break;
            case 'Voter Count':
                cardElement = <VoterTurnout/>;
                cardTitle = 'Voter Count';
                break;
            default:
                cardElement = <p>Invalid card items passed.</p>;
        }
        
        return (
            <div className="card-container">
                    <Card className='white darken-1 z-depth-3' title={cardTitle}>
                        {cardElement}
                    </Card>
            </div>
        );
    }
}

export default CardContainer;
