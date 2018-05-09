import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import CardContainer from '../Card/card';
import logo from '../../Voleon.png';
import './Navbar.css';
import {changePage,sendNavBarReq} from '../../store/actions/form'


class Navbar extends Component {
    
    constructor() {
        super();
        this.gotoPage.bind(this);
        this.getActiveClass.bind(this);
        this.getResponse.bind(this);
    }

    static propTypes = {
        logged: PropTypes.object,
        changePage: PropTypes.func.isRequired,
        sendNavBarReq: PropTypes.func.isRequired
    }

    gotoPage(destinationPage) {
        this.props.changePage(destinationPage);
    }

    getActiveClass(item) {
        // Accounts for 'ElectionsList', 'ElectionsVote', 'ElectionsResults' etc
        if (item.startsWith(item) && this.props.logged.pageType.startsWith(item))
            return 'active';
        else
            return 'inactive';
    }

    getResponse(request) {
        console.log(request)
        this.props.sendNavBarReq(request);
    }

    render() {
        console.log('in navbaar', this.props);
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper blue lighten-1">
                        <img src={ logo } className="App-logo" alt="logo"/>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {(this.props.logged.userType !== '0') ? <li className={this.getActiveClass('Profile')}><a href="#" onClick={(e) => this.getResponse('user/myprofile')}>Profile</a></li> : ''}
                            <li className={this.getActiveClass('Feed')}><a href="#" onClick={(e) => this.gotoPage('Feed')}>Newsfeed</a></li>
                            <li className={this.getActiveClass('Election')}><a href="#" onClick={(e) => this.getResponse('election')}>Elections</a></li>
                            <li><a href="#" onClick={(e) => this.getResponse('user/logout')}>Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
    changePage: (destinationPage) => dispatch(changePage(destinationPage)),
    sendNavBarReq:(request) => dispatch(sendNavBarReq(request))
})

export default connect(mapStateToProps,dispatchToProps)(Navbar);
