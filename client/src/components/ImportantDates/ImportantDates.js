import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Col ,Button} from 'react-materialize';
import './ImportantDates.css';
import {changePage} from '../../store/actions/form'


class ImportantDates extends Component{
        
    constructor() {
        super();
        this.gotoPage.bind(this);
    }

    static propTypes = {
        logged: PropTypes.object,
        changePage: PropTypes.func.isRequired,
    }

    gotoPage(destinationPage, seatObj) {
        this.props.changePage(destinationPage, seatObj);
    }
    
	render(){
        console.log('in imp dates', this.props);
        // INDEXES OF 'dates' ARRAY COME FROM 'ElectionDashboardPage'
		return (
			<div >
				<ul className="collection">
				    <li className = "collection-item avatar" id="App-deadline" >
                        <i className="small material-icons circle">event</i>
                        <span className="title">Application Deadline: {this.props.dates[1]}</span>
					</li>
					<li className = "collection-item avatar" id="polling-date" >
                        <i className="small material-icons circle">event</i>
                        <span className="title">Polling Date: {this.props.dates[0]}</span>
					</li>
					<li className = "collection-item avatar" id="polling-time" >
					    <i className="small material-icons circle">access_time</i>
                        <span className="title">Polling Time: 9AM to 5PM</span>
					</li>
					<li className = "collection-item avatar" id="results-day" >
					    <i className="small material-icons circle">event</i>
                        <span className="title">Results Day: 22/9/2018</span>
					</li>
			    </ul>
                

			    {(this.props.logged.userType !== '2') ? <div className='form__submit-btn-wrapper'>
                                    <Button className='blue lighten-1' waves='light' onClick={(e) => this.gotoPage('ElectionVoting', {})}>Vote Now</Button>
                                </div> : ''}
                {(this.props.logged.userType === '2') ? <div className='form__submit-btn-wrapper'>
                                    <Button className='blue lighten-1' waves='light' onClick={(e) => this.gotoPage('ElectionResults', this.props.logged.passedArgs)}>Results</Button>
                                </div> : ''}
             </div>
			)
		}
}

const mapStateToProps = (state) => ({
        logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
    changePage: (destinationPage, seatObj) => dispatch(changePage(destinationPage, seatObj)),
})

export default connect(mapStateToProps,dispatchToProps)(ImportantDates);
