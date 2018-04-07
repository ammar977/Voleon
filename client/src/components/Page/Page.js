import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {Card, Col} from 'react-materialize';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import './Page.css';


class Page extends Component {
    
    static propTypes = {
        lun: PropTypes.object,
    }

    // static defaultProps = {
    //     lun: {success: false, pageType: "Login"}
    // }

    render() {
        console.log('in page', this.props);

        let pageElement = '';
        switch(this.props.lun.pageType) {
            case 'Login':
                pageElement = <LoginPage/>;
                break;
            case 'Signup':
                pageElement = <SignupPage/>;
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
    lun: state.lun
})

const dispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, dispatchToProps)(Page);

// export default Page;
