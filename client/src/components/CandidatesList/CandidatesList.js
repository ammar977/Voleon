import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Col, Icon,Button} from 'react-materialize';
import './CandidatesList.css';
import {changePage} from '../../store/actions/form'


class CandidatesList extends Component{
        
    constructor() {
        super();
        this.gotoPage.bind(this);
    }

    static propTypes = {
        changePage: PropTypes.func.isRequired,
    }

    gotoPage(destinationPage) {
        this.props.changePage(destinationPage);
    }
    
	render(){
		return (
			<div>
				<ul className="collection">
				    <li className="collection-item avatar" >
					    <div className="CandidateBlock" onClick={(e) => this.gotoPage('Profile')}>
					    	<a href="#" className="CandidatesEntry">Taha Bin Amir</a>
					    </div>
					</li>
					
					<li className="collection-item avatar" >
					    <div className="CandidateBlock">
					   		<a href="#" className="CandidatesEntry">Kinza Habib</a>
					    </div>
					</li>

					<li className="collection-item avatar" >
					    <div className="CandidateBlock">
					   		<a href="#" className="CandidatesEntry">Ammar Ahmad</a>
					    </div>
					</li>
				</ul>	
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

const dispatchToProps = (dispatch) => ({
    changePage: (destinationPage) => dispatch(changePage(destinationPage)),
})

export default connect(mapStateToProps,dispatchToProps)(CandidatesList);
