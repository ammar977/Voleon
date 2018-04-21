import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import FeedPage from '../FeedPage/FeedPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import ElectionsListPage from '../ElectionsListPage/ElectionsListPage';
import ElectionsArchivePage from '../ElectionsArchivePage/ElectionsArchivePage';
import ApplicationPage from '../ApplicationPage/ApplicationPage';
import ElectionCreationPage from '../ElectionCreationPage/ElectionCreationPage';
import ElectionDashboardPage from '../ElectionDashboardPage/ElectionDashboardPage';
import ElectionVotingPage from '../ElectionVotingPage/ElectionVotingPage';
import ElectionResultsPage from '../ElectionResultsPage/ElectionResultsPage';
import './Page.css';


class Page extends Component {
    
    static propTypes = {
        logged: PropTypes.object,
    }

    render() {
        console.log('in page', this.props);

        let pageElement = '';
        switch(this.props.logged.pageType) {
            case 'Login':
                pageElement = <LoginPage/>;
                break;
            case 'Signup':
                pageElement = <SignupPage/>;
                break;
            case 'Feed':
                pageElement = <FeedPage/>;
                break;
            case 'Verification':
                pageElement = <LoginPage/>;
                break;
            case 'Profile':
                pageElement = <ProfilePage/>;
                break;
            case 'ElectionsList':
                pageElement = <ElectionsListPage/>;
                break;
            case 'ElectionsArchive':
                pageElement = <ElectionsArchivePage/>;
                break;
            case 'ElectionApplicationPage':
                pageElement = <ApplicationPage/>;
                break;
            case 'ElectionCreation':
                pageElement = <ElectionCreationPage/>;
                break;
            case 'ElectionDashboard':
                pageElement = <ElectionDashboardPage/>;
                break;
            case 'ElectionVoting':
                pageElement = <ElectionVotingPage/>;
                break;
            case 'ElectionResults':
                pageElement = <ElectionResultsPage/>;
                break;
            default:
                pageElement = <p>Invalid page type passed.</p>;
        }

        return (
            <div className="page_container">
                {pageElement}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged
})

const dispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, dispatchToProps)(Page);
