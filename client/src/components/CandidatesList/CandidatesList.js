import {Card, Col, Icon,Button} from 'react-materialize';
import React, { Component } from 'react';
import './CandidatesList.css';


class CandidatesList extends Component{


	render(){

		return (

			<div>

				<ul className = "collection">
				    <li className = "collection-item avatar" >
					   <div className="CandidateBlock">
					   		<a href="#" className="CandidatesList">Taha Bin Amir </a>
					   </div>
					</li>

					
					<li className = "collection-item avatar" >
					   <div className="CandidateBlock">
					   		<a href="#" className="CandidatesList">Kinza Habib </a>
					   </div>
					</li>

					
					 <li className = "collection-item avatar" >
					   <div className="CandidateBlock">
					   		<a href="#" className="CandidatesList">Ammar Ahmad </a>
					   </div>
					</li>
				</ul>	
			</div>


		)

	}


}export default CandidatesList;