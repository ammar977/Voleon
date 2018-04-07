import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button} from 'react-materialize';
import './loginForm.css';
import {sendUser,changeCard} from '../../store/actions/form'


class LoginForm extends Component {

    static propTypes = {
        sendUser: PropTypes.func.isRequired,
        changeCard: PropTypes.func.isRequired,
        lun: PropTypes.object,
        // test: PropTypes.object,
    }

    // static defaultProps = {
    //     lun: {success: false, pageType: "Login"},
    //     // test: {pageType: "Login"}
    // }

    formSubmit(e) {
        e.preventDefault();

        const user = {
            username:e.target.username.value,
            password:e.target.password.value
        };

        this.props.sendUser(user);
    }

    gotoSignup(e) {
        e.preventDefault();
        this.props.changeCard('Signup');
    }

    render() {
        console.log('in signupform', this.props);

        return (
            <div className='form-page__wrapper'>
                <div className='form-page__form-wrapper'>
                    <form className='form' onSubmit = {this.formSubmit.bind(this)} >
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                type='text'
                                id='username'
                                placeholder='19100044'
                                autoCorrect='off'
                                autoCapitalize='off'
                                spellCheck='false' />
                            <label className='form__field-label' htmlFor='username'>
                                Username
                            </label>
                        </div>
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                id='password'
                                type='password'
                                placeholder='••••••••••' />
                            <label className='form__field-label' htmlFor='password'>
                                Password
                            </label>
                        </div>
                        <div className='form__submit-btn-wrapper'>
                            <Button className='blue lighten-1' waves='light' >Login</Button>
                        </div>

                        <div className="card-action">
                            Need an account? <a href="#" className="blue-text text-lighten-3" onClick={this.gotoSignup.bind(this)}>Register</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    lun: state.lun,
    // test: state.test
})

const dispatchToProps = (dispatch) => ({
     sendUser: user => dispatch(sendUser(user)),
     changeCard: (destinationCard) => dispatch(changeCard(destinationCard))
})

export default connect(mapStateToProps,dispatchToProps)(LoginForm);
