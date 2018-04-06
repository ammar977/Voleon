import {GET_CUSTOMERS, ADD_CUSTOMER, LOGIN_TEST, REGISTER} from './constants';

export const getCustomers = () => dispatch => {
    return fetch('/api/customers')
        .then(res => res.json())
        .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
}

export const addCustomer = (cust) => dispatch => {
    return fetch('/api/customers', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(cust)
    })
    .then(res => res.json())
    .then(successLogin => dispatch({type: LOGIN_TEST, payload: successLogin}));
    // .then(newCustomer => dispatch({type: ADD_CUSTOMER, payload: newCustomer}));
}

export const sendUser = (user) => dispatch => {
    return fetch('/user/feed', {
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