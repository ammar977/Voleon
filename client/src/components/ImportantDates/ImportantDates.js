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
				<ul>
				    <li className = "ImportantDates-container" >
					    Application Deadline: {this.props.dates[1]}
					</li>

				    <br/>

					<li className = "ImportantDates-container" >
					    Polling Date: {this.props.dates[0]}
					</li>

						<br/>
					<li className = "ImportantDates-container" >
					    Polling Time: 9AM to 5PM
					</li>

					<br/>
					<li className = "ImportantDates-container" >
					    Results Day: 22/04/18
					</li>

					<br/>
					<li className = "ImportantDates-container" >
					    Oath Taking 23/04/18
					</li>

			    </ul>
                

			    {(this.props.logged.userType !== '2') ? <div className='form__submit-btn-wrapper'>
                                    <Button className='blue lighten-1' waves='light' onClick={(e) => this.gotoPage('ElectionVoting')}>Vote Now</Button>
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
