import {Card, Col ,Button} from 'react-materialize';
import React, { Component } from 'react';
import './ImportantDates.css';


class ImportantDates extends Component{


	render(){

		return (

			<div >
				<ul>
				    <li className = "ImportantDates-container" >
					   Application Deadline: 14/04/18
					 </li>

				        <br/>

					 <li className = "ImportantDates-container" >
					   Polling Date: 20/04/18
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

			     <div className='form__submit-btn-wrapper'>
                    <Button className='blue lighten-1' waves='light' >Vote Now</Button>
                 </div>
             </div>

			)

		}

	}

	export default ImportantDates;