import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Col, Icon,Button} from 'react-materialize';
import './CandidatesList.css';
import {changePage, getCandidateProfiles} from '../../store/actions/form'


class CandidatesList extends Component{
        
    constructor() {
        super();
        this.gotoPage.bind(this);
    }

    static propTypes = {
        logged: PropTypes.object,
        changePage: PropTypes.func.isRequired,
        getCandidateProfiles: PropTypes.func.isRequired,
    }

    gotoPage(destinationPage, candidateObj) {
        console.log('here', destinationPage, candidateObj);
        this.props.changePage(destinationPage, candidateObj);
    }

    componentWillMount() {
        this.props.getCandidateProfiles(this.props.candidates);
    }
    
	render(){
        console.log('in candidates list', this.props.logged.candidateProfiles);

        let profilesList = (this.props.logged.candidateProfiles === undefined) ? [] : this.props.logged.candidateProfiles;
		return (
			<div>
				<ul className="collection">
                    
                    {
                        profilesList.map(candidate => {
                            return <li className="collection-item avatar" key={candidate.user._id} >
                                <div className="CandidateBlock" onClick={(e) => this.gotoPage('Profile', candidate)}>
                                    <a href="#" className="CandidatesEntry">{candidate.user.firstName} {candidate.user.lastName}</a>
                                </div>
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
})

export default connect(mapStateToProps,dispatchToProps)(CandidatesList);
