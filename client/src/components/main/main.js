import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import Customers from '../Customer/customers'
import AddCustomer from '../addCustomer/addCustomer'

class Main extends Component {

    static propTypes = {
        logged: PropTypes.object
    }

    static defaultProps = {
        logged: {success: false}
    }

    render () {
        return (
            <div className="Main">
                { !this.props.logged.success ? <AddCustomer/> : <Customers/> }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged
})

const dispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, dispatchToProps)(Main);
