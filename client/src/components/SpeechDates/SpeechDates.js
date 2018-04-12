import {Card, Col ,Button} from 'react-materialize';
import React, { Component } from 'react';
import './SpeechDates.css';


class SpeechDates extends Component{


	render(){

		return (

			<div >
				<ul>
				    <li className = "SpeechDates-container" >
					   21/4/2018 - SDSB B-3
					 </li>

				        <br/>

					 <li className = "SpeechDates-container" >
					   22/4/2018 - Academic Block A3
					 </li>

						<br/>
					 <li className = "SpeechDates-container" >
					   22/4/2018 - SSE 9-B2
					 </li>


			    </ul>
             </div>

			)

		}

	}

	export default SpeechDates;