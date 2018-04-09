import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button} from 'react-materialize';
import './signupForm.css';
import {changeCard,sendNewUser} from '../../store/actions/form'


class SignupForm extends Component {
    
    static propTypes = {
        changeCard: PropTypes.func.isRequired,
        sendNewUser:PropTypes.func.isRequired,
        logged: PropTypes.object,
    }

    gotoLogin(e) {
        e.preventDefault();
        this.props.changeCard('Login');
    }

    formSubmit(e) {
        e.preventDefault();

        const newUser = {
            lumsId:e.target.lumsId.value,
            gender:e.target.gender.value,
            firstName:e.target.firstName.value,
            lastName:e.target.lastName.value,
            password:e.target.password.value,
            password2:e.target.password2.value
        }

        this.props.sendNewUser(newUser);
    }
    render() {
        return (
            <div className='form-page__wrapper'>
                <div className='form-page__form-wrapper'>
                    <form className='form' onSubmit = {this.formSubmit.bind(this)}>
                        <div className="formRow">
                            <div className='form__field-wrapper left_child'>
                                <input
                                    className='form__field-input'
                                    type='text'
                                    id='lumsId'
                                    placeholder='19100044'
                                    autoCorrect='off'
                                    autoCapitalize='off'
                                    spellCheck='false' />
                                <label className='form__field-label' htmlFor='username'>
                                    lums Id
                                </label>
                            </div>
                            <div className='form__field-wrapper right_child'>
                                <input
                                    className='form__field-input'
                                    type='text'
                                    id='gender'
                                    placeholder='M'
                                    autoCorrect='off'
                                    autoCapitalize='on'
                                    spellCheck='false' />
                                <label className='form__field-label' htmlFor='gender'>
                                    Gender (M/F)
                                </label>
                            </div>
                        </div>
                        <div className="formRow">
                            <div className='form__field-wrapper left_child'>
                                <input
                                    className='form__field-input'
                                    type='text'
                                    id='firstName'
                                    placeholder='Taha'
                                    autoCorrect='off'
                                    autoCapitalize='off'
                                    spellCheck='false' />
                                <label className='form__field-label' htmlFor='firstName'>
                                    First Name
                                </label>
                            </div>
                            <div className='form__field-wrapper right_child'>
                                <input
                                    className='form__field-input'
                                    type='text'
                                    id='lastName'
                                    placeholder='Amir'
                                    autoCorrect='off'
                                    autoCapitalize='off'
                                    spellCheck='false' />
                                <label className='form__field-label' htmlFor='lastName'>
                                    Last Name
                                </label>
                            </div>
                        </div>
                        <div className="formRow">
                            <div className='form__field-wrapper left_child'>
                                <input
                                    className='form__field-input'
                                    id='password'
                                    type='password'
                                    placeholder='••••••••••' />
                                <label className='form__field-label' htmlFor='password'>
                                    Password
                                </label>
                            </div>
                            <div className='form__field-wrapper right_child'>
                                <input
                                    className='form__field-input'
                                    id='password2'
                                    type='password'
                                    placeholder='••••••••••' />
                                <label className='form__field-label' htmlFor='password2'>
                                    Repeat Password
                                </label>
                            </div>
                        </div>
                        <div className='form__submit-btn-wrapper'>
                            <Button className='blue lighten-1' waves='light'>Signup</Button>
                        </div>

                        <div className="card-action center-align">
                            <a className="waves-effect waves-light btn transparent z-depth-0"><i className="material-icons blue-text text-lighten-3" onClick={this.gotoLogin.bind(this)}>arrow_back</i></a>
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
     changeCard: (destinationCard) => dispatch(changeCard(destinationCard)),
     sendNewUser: (newUser) => dispatch(sendNewUser(newUser))
})

export default connect(mapStateToProps,dispatchToProps)(SignupForm);
