import {Card, Col, Icon, Input, Button} from 'react-materialize';
import React, { Component } from 'react';
import profile from '../../profile.png';
import './VoteNow.css';


class VoteNow extends Component{


	render(){

		return (

			<div>

				<ul className = "collection">
					<li className = "collection-item avatar" >
						<div className="CandidateBlock">

							   <div className="card-image">
					            	<img src={ profile} alt="profile-image"  align="left"/> 
					            </div>

					            <label className="CandidatesList"> Taha Bin Amir
					            </label>

					            <div className="radioButton">
					            	<Input name='group1' type='radio' value='1'  />
					            </div>
					    </div>
				    </li>

					
					<li className = "collection-item avatar" >
						<div className="CandidateBlock">
							   <div className="card-image">
					            	<img src={ profile} alt="profile-image"  align="left"/> 
					            </div>
					            <label className="CandidatesList"> Ammar Ahmad
					            </label>
					            <div className="radioButton">
					            	<Input name='group1' type='radio' value='2'  />
					            </div>
					    </div>
				    </li>
				</ul>	

				<div className='form__submit-btn-wrapper'>
                            <Button className='blue lighten-1' waves='light' >Vote Now</Button>
                </div>
			</div>


		)

	}


}export default VoteNow;