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

    gotoPage(destinationPage) {
        this.props.changePage(destinationPage);
    }

    componentWillMount() {
        console.log('candidaes list mounting');
        this.props.getCandidateProfiles(this.props.candidates);
    }
    
	render(){
        console.log('in candidates list', this.props.logged.candidateProfiles);
		return (
			<div>
				<ul className="collection">
                    
                    {
                        this.props.candidates.map(candidate => {
                            return <li className="collection-item avatar" key={candidate} >
                                <div className="CandidateBlock" onClick={(e) => this.gotoPage('Profile')}>
                                    <a href="#" className="CandidatesEntry">Taha Bin Amir</a>
                                </div>
                            </li>
                        })
                    }

				    
					
					{/*<li className="collection-item avatar" >
					    <div className="CandidateBlock">
					   		<a href="#" className="CandidatesEntry">Kinza Habib</a>
					    </div>
					</li>

					<li className="collection-item avatar" >
					    <div className="CandidateBlock">
					   		<a href="#" className="CandidatesEntry">Ammar Ahmad</a>
					    </div>
					</li>*/}
				</ul>	
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
    changePage: (destinationPage) => dispatch(changePage(destinationPage)),
    getCandidateProfiles: (userIDList) => dispatch(getCandidateProfiles(userIDList)),
})

export default connect(mapStateToProps,dispatchToProps)(CandidatesList);
