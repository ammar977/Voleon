import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import CardContainer from '../Card/card';
import './ProfilePage.css';


class ProfilePage extends Component {
    
    static propTypes = {
        logged: PropTypes.object,
    }

    render() {
        console.log('in profile page', this.props.logged.passedArgs);
        return (
            <div className='profilePage_container'>
				<Navbar/>
				
				<div className="page_contents">
                    <p>this is the profile of {this.props.logged.passedArgs.user.firstName}</p>

	                <div id="dummy"></div>
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

export default connect(mapStateToProps,dispatchToProps)(ProfilePage);
