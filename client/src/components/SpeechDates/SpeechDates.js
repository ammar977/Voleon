import {Card, Col ,Button} from 'react-materialize';
import React, { Component } from 'react';
import './SpeechDates.css';


class SpeechDates extends Component{


	render(){

		return (

			<div >
				<ul className="collection">
				    <li className = "collection-item avatar">
				    	<i className="medium material-icons circle">event</i>
				    	<span className="title">21/4/2018 - SDSB B-3</span>
					</li>
					 <li className = "collection-item avatar" >
					   <i className="small material-icons circle">event</i>
					   <span className="title">22/4/2018 SSE</span>
					</li>
					<li className = "collection-item avatar" >
					   <i className="small material-icons circle">event</i>
					   <span className="title">22/4/2018 SSE B2</span>
					</li>
			    </ul>
             </div>

			)

		}

	}

	export default SpeechDates;