import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Col, Icon,Button} from 'react-materialize';
import './CandidatesList.css';
import {changePage, getCandidateProfiles, delCandidate} from '../../store/actions/form'
import picture from '../../picture.jpg';


class CandidatesList extends Component{
        
    constructor() {
        super();
        this.gotoPage.bind(this);
    }

    static propTypes = {
        logged: PropTypes.object,
        changePage: PropTypes.func.isRequired,
        getCandidateProfiles: PropTypes.func.isRequired,
        delCandidate: PropTypes.func.isRequired,
    }

    gotoPage(destinationPage, candidateObj) {
        console.log('here', destinationPage, candidateObj);
        this.props.changePage(destinationPage, candidateObj);
    }

    delCandidate(candid, seatid) {
        console.log('in delCandidate', candid, seatid);
        
        let toDelObj = {
            candidateId: candid._id,
            seatId: seatid,
        }

        this.props.delCandidate(toDelObj);
    }

    componentWillMount() {
        console.log('mounting');
        this.props.getCandidateProfiles(this.props.candidates);
    }
    
	render(){
        console.log('in candidates list', this.props);

        let profilesList = (this.props.logged.candidateProfiles === undefined) ? [] : this.props.logged.candidateProfiles;
		return (
			<div className='CandidatesList_container'>
				<ul className="collection">
                    
                    {
                        profilesList.map(candidate => {
                            return <li className="collection-item avatar" key={candidate.user._id} onClick={(e) => this.gotoPage('Profile', candidate)} >
                                    <img src={picture} className="circle" id="img"/>
                                    <span className="title">{candidate.user.firstName} {candidate.user.lastName}</span>
                                    <a href="#" className="blue-text text-lighten-4" onClick={this.delCandidate.bind(this, candidate.user, this.props.logged.currentSeat._id)}><i className="material-icons">delete</i></a>
                                </li>       
                        })
                    }
				</ul>	
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
    changePage: (destinationPage, candidateObj) => dispatch(changePage(destinationPage, candidateObj)),
    getCandidateProfiles: (userIDList) => dispatch(getCandidateProfiles(userIDList)),
    delCandidate: (toDelObj) => dispatch(delCandidate(toDelObj)),
})

export default connect(mapStateToProps,dispatchToProps)(CandidatesList);
