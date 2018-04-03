import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {addCustomer} from '../../store/actions/customer'

class AddCustomer extends Component {

    static propTypes = {
        addCustomer: PropTypes.func.isRequired,
        logged: PropTypes.object
    }

    static defaultProps = {
        logged: {success: false}
    }

    formSubmit(e){
        e.preventDefault()

        const cust = {
            "pass": e.target.custName.value
        };

        this.props.addCustomer(cust);
    } 

    render() {
        return (
            <form onSubmit={this.formSubmit.bind(this)}>
                <label>Add customer</label>
                <input type="text" name="custName" />
                <p>{this.props.logged.success ? 'logged in' : 'incorrect'}</p>
                <br />
                <input type="submit" />
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.logged
})

const dispatchToProps = (dispatch) => ({
     addCustomer: cust => dispatch(addCustomer(cust))
})

export default connect(mapStateToProps, dispatchToProps)(AddCustomer);
