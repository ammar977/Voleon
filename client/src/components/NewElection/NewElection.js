import {Card, Col, Row, Input, Button} from 'react-materialize';
import React, { Component } from 'react';
import './NewElection.css';


class NewElection extends Component {
	render() {
		return(
			<div>
				<div>
				  <Input s={12} type='select' label="Batch" defaultValue='2'>
				    <option value='1'>2018</option>
				    <option value='2'>2019</option>
				    <option value='3'>2020</option>
				    <option value='4'>2021</option>
				  </Input>
				</div>

				

				<div>
				  <Input s={12} type='select' label="School" defaultValue='2'>
				    <option value='1'>SDSB</option>
				    <option value='2'>SSE</option>
				    <option value='3'>MGS/HSS</option>
				    <option value='4'></option>
				  </Input>
				</div>

				<div>
					<row>
				 		 <Input label="Application Deadline" name='on' type='date' onChange={function(e, value) {}} />
		            </row>		
				</div>

				<div>
					<row>
				 		 <Input label="Polling Date" name='on' type='date' onChange={function(e, value) {}} />
				    </row>
				</div>

				
				 <div className='form__submit-btn-wrapper'>
                            <Button className='blue lighten-1' waves='light' >Login</Button>
                 </div>

				


			</div>
			)
	}
}

export default NewElection;