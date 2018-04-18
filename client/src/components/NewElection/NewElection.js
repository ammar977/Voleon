import {Card, Col, Row, Input, Button, Icon} from 'react-materialize';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {sendElectionSeat} from '../../store/actions/form';
import './NewElection.css';


class NewElection extends Component {

	static propTypes = {
        sendElectionSeat: PropTypes.func.isRequired
	}

	createElectionHandler(e) {
		e.preventDefault();
		console.log(e.target.batch.value);
		const seat = {
			electionId : e.target.batch.value,
			pollingDate: e.target.pollingDate.value,
			applicationDeadline: e.target.applicationDeadline.value,
			pollingStartTime:e.target.pollingStartTime.value,
			pollingEndTime:e.target.pollingEndTime.value
		};

		this.props.sendElectionSeat(seat);
	}

	render() {
		return(
			<div className='form-page__form-wrapper'>
			   <form className="form-style" onSubmit = {this.createElectionHandler.bind(this)}>
					<div className="formRow">
						<div className='form__field-wrapper left_child'>
						  <label className="heading-field" htmlFor='batch'>
	                           Batch
	                       </label>
						  <Input type='select' defaultValue='2' id = 'batch'>
						    <option value='18'>2018</option>
						    <option value='19'>2019</option>
						    <option value='20'>2020</option>
						    <option value='21'>2021</option>
						    <option value='99'>Masters</option>
						  </Input>
						</div>
					</div>

					<div className="formRow">
						<div className='form__field-wrapper left_child'>
						<label className="heading-field" htmlFor='gender'>
	                          Application Deadline
	                       </label>
							<Input name='on' type='date' id = 'applicationDeadline' onChange={function(e, value) {}} />
				      	</div>	
				      	</div>
					

						<div className="formRow">
						<div className='form__field-wrapper left_child'>
						<label className="heading-field" htmlFor='gender'>
	                         Polling Date
	                       </label>
					 		 <Input name='on' type='date' id = 'pollingDate' onChange={function(e, value) {}} />
					    </div>
					</div>

					<div className="formRow">
		                <div className='form__field-wrapper left_child'>
		                <label className="heading-field" htmlFor='gender'>
		                        Polling Start Time
		                       </label>
						  <Input name='on' type='Time' id = 'pollingStartTime' onChange={function(e, value) {}} />
						</div >
						</div>

						<div className="formRow">
							<div className='form__field-wrapper left_child'>
			                <label className="heading-field" htmlFor='gender'>
			                        Polling End Time
			                       </label>
							  <Input name='on' type='Time' id = 'pollingEndTime' onChange={function(e, value) {}} />
							</div >
					</div>


					 <div className='form__submit-btn-wrapper'>
	                            <Button className='blue lighten-1' waves='light'>Login</Button>
	                 </div>
	            </form>     

				


			</div>
			)
	}
}

const mapStateToProps = (state) => ({})

const dispatchToProps = (dispatch) => ({
    sendElectionSeat: (seat) => dispatch(sendElectionSeat(seat))
})

export default connect(mapStateToProps,dispatchToProps)(NewElection);
