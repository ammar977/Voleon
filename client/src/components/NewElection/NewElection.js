import {Card, Col, Row, Input, Button, Icon} from 'react-materialize';
import React, { Component } from 'react';
import './NewElection.css';


class NewElection extends Component {
	render() {
		return(
			<div className='form-page__form-wrapper'>
			   <form className="form-style">
					<div className="formRow">
						<div className='form__field-wrapper left_child'>
						  <label className="heading-field" htmlFor='gender'>
	                           Batch
	                       </label>
						  <Input s={12} type='select' defaultValue='2'>
						    <option value='1'>2018</option>
						    <option value='2'>2019</option>
						    <option value='3'>2020</option>
						    <option value='4'>2021</option>
						    <option value='5'>Masters</option>
						  </Input>
						</div>
					</div>

					<div className="formRow">
						<div className='form__field-wrapper left_child'>
						<label className="heading-field" htmlFor='gender'>
	                          Application Deadline
	                       </label>
							<Input name='on' type='date' onChange={function(e, value) {}} />
				      	</div>	
				      	</div>
					

						<div className="formRow">
						<div className='form__field-wrapper left_child'>
						<label className="heading-field" htmlFor='gender'>
	                         Polling Date
	                       </label>
					 		 <Input name='on' type='date' onChange={function(e, value) {}} />
					    </div>
					</div>

					<div className="formRow">
		                <div className='form__field-wrapper left_child'>
		                <label className="heading-field" htmlFor='gender'>
		                        Polling Start Time
		                       </label>
						  <Input name='on' type='Time' onChange={function(e, value) {}} />
						</div >
						</div>

						<div className="formRow">
							<div className='form__field-wrapper left_child'>
			                <label className="heading-field" htmlFor='gender'>
			                        Polling End Time
			                       </label>
							  <Input name='on' type='Time' onChange={function(e, value) {}} />
							</div >
					</div>


					 <div className='form__submit-btn-wrapper'>
	                            <Button className='blue lighten-1' waves='light' >Login</Button>
	                 </div>
	            </form>     

				


			</div>
			)
	}
}

export default NewElection;