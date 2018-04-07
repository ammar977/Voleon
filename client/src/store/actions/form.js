import {LOGIN_TEST, REGISTER} from './constants';

export const sendUser = (user) => dispatch => {
    return fetch('/user/login', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(successLogin => dispatch({type: LOGIN_TEST, payload: successLogin}));
}

export const register = () => dispatch => {
    dispatch({type: REGISTER, payload: {test: "Signup"}});
}