import {LOGIN_TEST, VIEW_CHANGE, SIGNUP, NEW_ELECTION,CHANGE_NAVBAR_PAGE} from './constants';

export const sendUser = (user) => dispatch => {
    return fetch('/user/login', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(successLogin => dispatch({type: LOGIN_TEST, payload: successLogin}));
}

export const changePage = (destinationCard, args) => dispatch => {
    console.log('changePage action to', destinationCard, args);
    dispatch({type: VIEW_CHANGE, payload: {success: null, pageType: destinationCard, passedArgs: args}});
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

export const sendElectionSeat = (seat) => dispatch => {
    return fetch('/election/new', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(seat)
    })
    .then(res => res.json())
    .then(response => dispatch({type: NEW_ELECTION, payload: response}));
}

export const sendNavBarReq = (request) => dispatch => {
    return fetch(`/${request}`, {
        method: 'GET',
        credentials:'include'
    })
    .then(res => res.json())
    .then(response => dispatch({type: CHANGE_NAVBAR_PAGE, payload: response}));
}
