import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionResultsPage.css';
import {getElectionResults} from '../../store/actions/form'

class ElectionResultsPage extends Component {
    
    static propTypes = {
        logged: PropTypes.object,
        getElectionResults: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.getElectionResults(this.props.logged.passedArgs._id);
    }

    render() {
        console.log('in results page', this.props.logged.results);
        return (
            <div className='electionResultsPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Voter Turnout"/>
                    <CardContainer cardType="Voter Count"/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
    getElectionResults: (electionID) => dispatch(getElectionResults(electionID)),
})

export default connect(mapStateToProps,dispatchToProps)(ElectionResultsPage);
