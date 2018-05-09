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
            <div className='Selectseat_container'>
                <ul className="collection">
                {
                    this.props.logged.electionSeats.map(seat => {
                        return <li className="collection-item avatar" onClick={(e) => this.gotoPage('ElectionDashboard', seat)} key={seat._id}>
                               <i className="material-icons circle">chevron_right</i>
                               <span className="title">{seat.electionId}</span>
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
    changePage: (destinationPage, seatObj) => dispatch(changePage(destinationPage, seatObj)),
})

export default connect(mapStateToProps,dispatchToProps)(SelectSeat);
