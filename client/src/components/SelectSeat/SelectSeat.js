import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, Col, Icon,Button} from 'react-materialize';
import './SelectSeat.css';
import {changePage} from '../../store/actions/form'

class SelectSeat extends Component{
    
    constructor() {
        super();
        this.gotoPage.bind(this);
    }

    static propTypes = {
		changePage: PropTypes.func.isRequired,
		logged: PropTypes.object,
    }

    gotoPage(destinationPage, seatObj) {
    	console.log('here', destinationPage, seatObj);
        this.props.changePage(destinationPage, seatObj);
    }
    
	render(){
		console.log('in select seat', this.props);
		return (
			<div>
				<ul className = "collection">

					{
						this.props.logged.electionSeats.map(seat => {
							return <li className = "collection-item avatar" onClick={(e) => this.gotoPage('ElectionDashboard', seat)}>
							    <p>
							     <img src="sample.jpg" alt=" " className="circle" hspace='10' />
									{seat.electionId}
									<a href="#" className="secondary-content">
										<i className="material-icons"> forward </i>
									</a>
								</p>
							</li>
						})
					}

					{/*<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							SSE General Seat 19
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>

					
					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							SSE General Seat 20 
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>


					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							SSE General Seat 21
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>


					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							General Seat 18 
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>

					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							General Seat 19 
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>


					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							General Seat 20 
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>

					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							General Seat 21
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>

					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							General Female Seat 18 
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>


					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							General Female Seat 19
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>


					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							 General Female Seat 20 
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
					</li>


					<br/>
					<li className = "collection-item avatar">
					    <p>
					     <img src="images/female.png" alt=" " className="circle" hspace='10' />
							General Female Seat 21
							<a href="#" className="secondary-content">
								<i className="material-icons"> forward </i>
							</a>
						</p>
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
    changePage: (destinationPage, seatObj) => dispatch(changePage(destinationPage, seatObj)),
})

export default connect(mapStateToProps,dispatchToProps)(SelectSeat);
