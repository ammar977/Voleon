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
            this.props.logged.passedArgs.applicationEndDate,
            this.props.logged.passedArgs.pollingStartTime,
            this.props.logged.passedArgs.pollingEndTime,
        ].map(date => new Date(date));

        return (
            <div className='electionDashboardPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <div className='row'>
                        <div className='col s6'>
                            <div className='row'>
                                <CardContainer cardType="Candidates List" candidates={this.props.logged.passedArgs.candidates}/>
                            </div>
                            <div className='row'>
                                <CardContainer cardType="Speech Dates"/>
                            </div>
                        </div>
                        <div className='col s6'>
                            <CardContainer cardType="Important Dates" dates={datesList}/>
                        </div>
                    </div>
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
