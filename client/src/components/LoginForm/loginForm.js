import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button} from 'react-materialize';
import './loginForm.css';
import {sendUser,register} from '../../store/actions/form'


class LoginForm extends Component {

    static propTypes = {
        sendUser: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        logged: PropTypes.object,
    }

    static defaultProps = {
        logged: {success: false}
    }

    formSubmit(e) {
        e.preventDefault();

        const user = {
            username:e.target.username.value,
            password:e.target.password.value
        };

        this.props.sendUser(user);
    }

    signup(e) {
        e.preventDefault();
        this.props.register();
    }

    render() {
        // console.log(this.props.logged);

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
                            Need an account? <a href="#" className="blue-text text-lighten-3" onClick={(e) => this.props.cardTypeChanger(e, 'Signup')}>Register</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    logged: state.logged
})

const dispatchToProps = (dispatch) => ({
     sendUser: user => dispatch(sendUser(user)),
     register: () => dispatch(register())
})

export default connect(mapStateToProps,dispatchToProps)(LoginForm);
