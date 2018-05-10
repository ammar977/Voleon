import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ElectionsListPage.css';


class ElectionsListPage extends Component {
    
    static propTypes = {
        logged: PropTypes.object,
    }

    render() {
        console.log('in electionslist page', this.props);
    
        let current_date = new Date();
        let deadline = new Date(this.props.logged.electionSeats[1].applicationEndDate);
        let isDeadlinePassed = current_date >= deadline.getTime();

        return (
            <div className='electionsListPage_container'>
                <Navbar/>
                
                <div className="page_contents">
                    <CardContainer cardType="Select Seat"/>

                    {(this.props.logged.userType === '2') ? <div className='oneButtonContainer'>
                         <CardContainer cardType="One Button" cardText="New Election"/>
                    </div> : ''}
                    {(this.props.logged.userType === '2') ? <div className='oneButtonContainer'>
                         <CardContainer cardType="One Button" cardText="Archive"/>
                    </div> : ''}
                    {(this.props.logged.userType === '0' && !isDeadlinePassed) ? <div className='oneButtonContainer'>
                         <CardContainer cardType="One Button" cardText="Application"/>
                    </div> :''}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps,dispatchToProps)(ElectionsListPage);
