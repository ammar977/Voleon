import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionDashboardPage.css';
import {changePage} from '../../store/actions/form'


class ElectionDashboardPage extends Component {
    
    constructor() {
        super();
        this.gotoPage.bind(this);
    }

    static propTypes = {
        changePage: PropTypes.func.isRequired,
        logged: PropTypes.object,
    }

    gotoPage(destinationPage) {
        this.props.changePage(destinationPage);
    }

    render() {
        console.log('in dashboard page', this.props);
        let datesList = [
            this.props.logged.passedArgs.date, 
            this.props.logged.passedArgs.applicationEndDate
        ];

        return (
            <div className='electionDashboardPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Candidates List" candidates={this.props.logged.passedArgs.candidates}/>
                    <CardContainer cardType="Speech Dates"/>
                    <CardContainer cardType="Important Dates" dates={datesList}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
    changePage: (destinationPage) => dispatch(changePage(destinationPage)),
})

export default connect(mapStateToProps,dispatchToProps)(ElectionDashboardPage);