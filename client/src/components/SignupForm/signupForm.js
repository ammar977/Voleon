import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button} from 'react-materialize';
import './signupForm.css';
import {changeCard} from '../../store/actions/form'

class SignupForm extends Component {
    
    static propTypes = {
        changeCard: PropTypes.func.isRequired,
        logged: PropTypes.object,
    }

    gotoLogin(e) {
        e.preventDefault();
        this.props.changeCard('Login');
    }

    render() {
        return (
            <div className='form-page__wrapper'>
                <div className='form-page__form-wrapper'>
                    <form className='form'>
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                type='text'
                                id='username'
                                placeholder='frank.underwood'
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
                            <Button className='blue lighten-1' waves='light' >Signup</Button>
                        </div>

                        <div className="card-action">
                            <a className="btn-flat"><i className="large material-icons" onClick={this.gotoLogin.bind(this)}>arrow_back</i></a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    logged: state.logged,
})

const dispatchToProps = (dispatch) => ({
     changeCard: (destinationCard) => dispatch(changeCard(destinationCard))
})

export default connect(mapStateToProps,dispatchToProps)(SignupForm);
