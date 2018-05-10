import {Card, Col, Icon, Input, Button} from 'react-materialize';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import profile from '../../profile.png';
import './VoteNow.css';
import {castVote} from '../../store/actions/form'


class VoteNow extends Component{

	static propTypes = {
        castVote: PropTypes.func.isRequired,
        logged: PropTypes.object,
	}
	
	formSubmit(e) {
		e.preventDefault();
		console.log('form submit', e.target.selectedCandidate.value);

		let voteObj = {
			candidateId: e.target.selectedCandidate.value,
			seatId: this.props.logged.currentSeat._id
		}
		this.props.castVote(voteObj);
	}

	render(){
		console.log('in voteNow', this.props);
		return (
			<div>
				<form className='votingForm' onSubmit = {this.formSubmit.bind(this)} >
					<ul className = "collection">
					{
						this.props.logged.candidateProfiles.map(candidate => {
							return <li className = "collection-item avatar" key={candidate.user._key}>
								<div className="card-image">
									<img src={ profile} alt="profile-image"  align="left"/> 
								</div>
								<label className="CandidatesList">{candidate.user.firstName} {candidate.user.lastName}</label>

								<div className="radioButton">
									<Input name='selectedCandidate' type='radio' value={candidate.user._id}  />
								</div>
							</li>
						})
					}
					</ul>
				
					<div className='form__submit-btn-wrapper'>
						<Button className='blue lighten-1' waves='light' >Vote Now</Button>
					</div>
				</form>
			</div>


		)

	}


}

const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
	castVote: selectedCandidate => dispatch(castVote(selectedCandidate)),
})

export default connect(mapStateToProps,dispatchToProps)(VoteNow);
