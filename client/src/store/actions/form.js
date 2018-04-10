import {LOGIN_TEST, REGISTER, SIGNUP} from './constants';

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

export const changeCard = (destinationCard) => dispatch => {
    console.log('changeCard action to ', destinationCard);
    dispatch({type: REGISTER, payload: {success: null, pageType: destinationCard}});
}


export const sendNewUser = (newUser) => dispatch => {
    console.log('hey');
    return fetch('/user/signup', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(verStatusObj => dispatch({type: SIGNUP, payload: verStatusObj}));
}