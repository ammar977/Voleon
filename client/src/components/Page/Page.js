import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
import {Card, Col} from 'react-materialize';
import LoginPage from '../LoginPage/LoginPage';
import './Page.css';


class Page extends Component {

    render() {

        let pageElement = '';
        switch(this.props.pageType) {
            case 'Login':
                pageElement = <LoginPage/>;
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

export default Page;
